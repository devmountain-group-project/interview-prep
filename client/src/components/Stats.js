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
      points: 0,
      userIconUrl: '',
      littleDudes: [],
    }
  }
 
  //THIS DISPLAYS USERNAME OF LOGGED IN USER
  componentDidMount() {
    this.addPoints();
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
    this.setState({points: totalPoints});
  }

  randomIcon = () => {
<<<<<<< Updated upstream
    console.log('these are the little dudes', this.state.littleDudes)
    var iconUrl = this.state.littleDudes[Math.floor(Math.random() * this.state.littleDudes.length)]
    console.log('this is the iconUrl', iconUrl)
=======
    axios.get('/api/getDudes').then(res => {
      this.setState({littleDudes: res.data})
    }).then(res => {
      var iconUrl = this.state.littleDudes[Math.floor(Math.random() * this.state.littleDudes.length)]
>>>>>>> Stashed changes
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
            <div>
              {this.props.user.profile_icon ?
                <img src= {this.props.user.profile_icon} alt='icon'/> :
                <div>
                  <img src={iconFive} alt='pic'/>
                  <button onClick ={()=> {this.randomIcon()}}>Get Random Icon</button>
                </div>}

              <h3>{this.props.user.username}</h3>
              
            </div>
            <div className="statsDisplay">
              <h2>Stats</h2>
              <h4>Meters Ran</h4>
              <p>{this.state.points}m</p>
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
