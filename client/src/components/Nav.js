import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/nav.css'
const iconTwo = require('./../css/checklist.png');
const iconThree = require('./../css/flask.png');
const iconFour = require('./../css/paper-plane.png');


class Nav extends Component {

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



export default Nav;
