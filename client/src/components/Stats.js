import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {getSolvedProblems, solved, getUserInfo} from './../redux/reducers/problemReducer.js'
import '../css/main.css'
import '../css/stats.css'
const iconFive = require('./../css/protect.png');
// const { getUserInfo, user } = this.props;



class Stats extends Component {
  constructor() {
    super();

    this.state = {
      points: 0
    }
  }
addPoints() {
  var totalPoints = this.props.problemReducer.solved.points;
  this.setState({points: totalPoints});
}
  componentDidMount() {
      getUserInfo();
      this.addPoints()
  }


    render() {

      const solved = this.props.problemReducer.solved;


      const logo = "<CodeSprint/>";
        return (
          <div className="stats">
            <div>
              <img src={iconFive}/>
              <h3>McKay Archibald</h3>

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

export default connect( mapStateToProps, { getSolvedProblems, getUserInfo } )( Stats );
