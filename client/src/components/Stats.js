import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/stats.css'
const iconFive = require('./../css/protect.png');


class Stats extends Component {

    render() {
      const logo = "<CodeSprint/>";
        return (
          <div className="stats">
            <div>
              <img src={iconFive}/>
              <h3>Username Here</h3>
              <p>Settings</p>
            </div>
            <div>
              Stats
              Points
              Number Completed
            </div>
          </div>
        )
    }
}



export default Stats;
