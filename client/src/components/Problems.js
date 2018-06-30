import React, {Component} from 'react'
import Header from './Header';
import Nav from './Nav';
import Stats from './Stats';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './../css/problems.css';

import{getProblems, allProblems} from './../redux/reducers/problemReducer.js'

class Problems extends Component {

  componentDidMount() {
      this.props.getProblems();
  }

    render(){
        const allProblems = this.props.problemReducer.allProblems;
        return(

          <div className="background">
              <div>
                <Header />
              </div>
              <div className="contentContainer">
                <Nav />
                <div className="problem">
                  <h1>Sprints</h1>
                  <table className="problemTable">
                  {allProblems.map((item,index) => {

                        if(index % 2 === 0) {
                          return(
                        <tr>
                        <div><Link to={`/problemview/${item.id}`}>{item.name}</Link></div>
                        <div>{item.difficulty} Meters</div>
                        </tr>
                      )
                      } else {
                        return (
                        <tr className="offRow">
                        <div><Link to={`/problemview/${item.id}`}>{item.name}</Link></div>
                        <div>{item.difficulty} Meters</div>
                        </tr>
                      )
                      }
                  })}
                  </table>
                </div>
                <Stats/>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return state;

  }

export default connect( mapStateToProps, { getProblems } )( Problems );
