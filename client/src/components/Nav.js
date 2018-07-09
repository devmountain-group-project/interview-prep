import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/nav.css'
import {connect} from 'react-redux'
import {handleToggleScoreCard, handleToggleSubmit, handleToggleSprints} from './../redux/reducers/problemReducer'

const iconTwo = require('./../css/images/stopwatch.png');
const iconThree = require('./../css/images/runner.png');
const iconFour = require('./../css/images/rocket.png');


class Nav extends Component {

    render() {
        return (
            <div className="tabs">
              <div className= {this.props.toggle === 'ScoreCard' ? 'tab-on' : 'tab'} >
                <img src={iconTwo} alt='pic'/>
                <Link to={`/dashboard`} onClick={()=> {this.props.handleToggleScoreCard()}}>Score Card</Link>
              </div>
              <div className= {this.props.toggle === 'Sprints' ? 'tab-on' : 'tab'} ><img src={iconThree} alt='pic'/>
                    <Link to={`/problems`} onClick={()=> {this.props.handleToggleSprints()}}>Sprints</Link>
              </div>
              <div className= {this.props.toggle === 'Submit' ? 'tab-on' : 'tab'} >
                <img src={iconFour} alt='pic'/>
                <Link to={`/submission`} onClick={()=> {this.props.handleToggleSubmit()}}>Submit</Link>
              </div>
            </div>
        )
    }
}

function mapStateToProps (state){
  return state
}

export default connect(mapStateToProps, {handleToggleScoreCard, handleToggleSubmit, handleToggleSprints})(Nav)    
