import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import {getSolvedProblems, getUser} from './../redux/reducers/problemReducer.js'
import '../css/main.css'
import '../css/stats.css'

const iconFive = require('./../css/protect.png');





class Stats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userIconUrl: '',
      littleDudes: [],
    }
  }
 
  //THIS DISPLAYS USERNAME OF LOGGED IN USER
  componentDidMount() {
    this.props.getUser()
    axios.get('/api/getDudes').then(res=> {
      this.setState({littleDudes: res.data})
    })
  }

  addPoints() {
    var totalPoints = 0;
    var solvedProblems = this.props.solved;
    var solvedObject = {};
    for(var i = 0; i < solvedProblems.length; i++) {
      solvedObject = this.props.solved[i];
      for (var key in solvedObject) {
        if(key === "points") {
          totalPoints += solvedObject[key];
        }
      }
    }
    return(
      <h3>{totalPoints}</h3>
    )
  }

  randomIcon = () => {
    axios.get('/api/getDudes').then(res => {
      this.setState({littleDudes: res.data})
    }).then(res => {
      var iconUrl = this.state.littleDudes[Math.floor(Math.random() * this.state.littleDudes.length)]
    this.setState({userIconUrl: iconUrl.profile_icon}, this.setUserIcon)
    })
    
  }

  setUserIcon = () => {
    var url = this.state.userIconUrl
    axios.post('/api/addIcon', {url})
  }

    render() {
      
        return (
          <div className="stats">
            <div className ="stats-box">
              {this.props.user.profile_icon ?
                <img className='little-dude' src= {this.props.user.profile_icon} alt='icon'/> :
                <div className= 'statsDisplay'>
                  <img className='icon' src={iconFive} alt='pic'/>
                  <button className = "random-icon-button" onClick ={()=> {this.randomIcon()}}>Get Random Icon</button>
                </div>}

              <h3>{this.props.user.username}</h3>
              
            </div>
            <div className="statsDisplay stats-box">
              <h2>Stats</h2>
              <h4>Meters Ran</h4>
              <p>{this.addPoints()}</p>
              <h4>Finished Sprints</h4>
              <p>{this.props.solved.length}</p>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
  const {problemReducer} = state
    return {
      user: problemReducer.user,
      solved: problemReducer.solved
    }
  }

export default connect( mapStateToProps, { getSolvedProblems, getUser } )( Stats );
