import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import {getSolvedProblems} from './../redux/reducers/problemReducer.js'
import '../css/main.css'
import '../css/stats.css'

const iconFive = require('./../css/protect.png');



class Stats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      retrievedUsername: false,
      points: 0
    }
  }

  //THIS DISPLAYS USERNAME OF LOGGED IN USER
  componentDidMount() {
    this.addPoints();
  }

  addPoints() {
    var totalPoints = 0;
    var solvedProblems = this.props.problemReducer.solved;
    var solvedObject = {};
    for(var i = 0; i < solvedProblems.length; i++) {
      solvedObject = this.props.problemReducer.solved[i];
      for (var key in solvedObject) {
        if(key === "points") {
          totalPoints += solvedObject[key];
        }
      }
    }
    this.setState({points: totalPoints});
  }

    render() {
      const solved = this.props.problemReducer.solved;
      const user = this.props.problemReducer.user;

        return (
          <div className="stats">
            <div>
              <img src={iconFive} alt='pic'/>
              <h3>{user.username}</h3>
            </div>
            <div className="statsDisplay">
              <h2>Stats</h2>
              <h4>Meters Ran</h4>
              <p>{this.state.points}m</p>
              <h4>Finished Sprints</h4>
              <p>{solved.length}</p>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return state

  }

export default connect( mapStateToProps, { getSolvedProblems } )( Stats );
