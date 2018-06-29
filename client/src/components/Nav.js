import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/main.css'
import '../css/nav.css'
const iconTwo = require('./../css/images/stopwatch.png');
const iconThree = require('./../css/images/runner.png');
const iconFour = require('./../css/images/rocket.png');


class Nav extends Component {
  constructor() {
        super();

    }


    render() {
        return (
            <div className="tabs">
            <div>
              <img src={iconTwo}/>
              <Link to={`/dashboard`}>Score Card</Link>
            </div>
            <div><img src={iconThree}/>
                  <Link to={`/problems`}>Sprints</Link>
            </div>
            <div>
              <img src={iconFour}/>
              <Link to={`/submission`}>Submit</Link>
            </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state;
  }

  export default Nav
