import React, {Component} from 'react'
import Nav from './Nav';
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom';

import{getProblems, allProblems} from './../redux/reducers/problemReducer.js'

class Problems extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
      this.props.getProblems();
  }

    render(){
        const allProblems = this.props.problemReducer.allProblems;
        console.log(11111, allProblems)
        return(


            <div>
                <Nav />
                <h1>Problems</h1>
                {allProblems.map(item => {
                  return(
                    <div>
                    <Link to={`/problemview/${item.id}`}>{item.name}</Link>
                    </div>
                  )
                })}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;

  }

export default connect( mapStateToProps, { getProblems } )( Problems );
