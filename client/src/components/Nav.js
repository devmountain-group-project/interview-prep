import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/nav.css'
const iconTwo = require('./../css/images/stopwatch.png');
const iconThree = require('./../css/images/runner.png');
const iconFour = require('./../css/images/rocket.png');


class Nav extends Component {

    render() {
        return (
            <div className="tabs">
            <div>
              <img src={iconTwo} alt='pic'/>
              <Link to={`/dashboard`}>Score Card</Link>
            </div>
            <div><img src={iconThree} alt='pic'/>
                  <Link to={`/problems`}>Sprints</Link>
            </div>
            <div>
              <img src={iconFour} alt='pic'/>
              <Link to={`/submission`}>Submit</Link>
            </div>
            </div>
        )
    }
}


  export default Nav
