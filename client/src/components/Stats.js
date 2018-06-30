import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import {getSolvedProblems} from './../redux/reducers/problemReducer.js'
import '../css/main.css'
import '../css/stats.css'

const iconFive = require('./../css/protect.png');
// const { getUserInfo, user } = this.props;



class Stats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      retrievedUsername: false
    }
  }

  //THIS DISPLAYS USERNAME OF LOGGED IN USER
  componentDidMount() {
    if(this.state.retrievedUsername === false) {
      axios.get('/auth/me').then(res => {
        if(res.data) {
          this.setState({username: res.data.username, retrievedUsername: true})
        }
      })
    }
  }

  addPoints() {
    var totalPoints = this.props.problemReducer.solved.points;
    this.setState({points: totalPoints});
  }

    render() {
      const solved = this.props.problemReducer.solved;
        return (
          <div className="stats">
            <div>
              <img src={iconFive} alt='pic'/>
              <h3>{this.state.username}</h3>
              <p>Settings</p>
            </div>
            <div className="statsDisplay">
              <h2>Stats</h2>
              <h4>Meters Ran</h4>
              <p>100m</p>
              <h4>Finished Sprints</h4>
              <p>{solved.length}</p>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return state;

  }

export default connect( mapStateToProps, { getSolvedProblems } )( Stats );
