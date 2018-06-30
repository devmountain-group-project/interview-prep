import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Stats from './Stats';
import './../css/dashboard.css';

import{getSolvedProblems, solved, getProblems, allProblems} from './../redux/reducers/problemReducer.js'



class Dashboard extends Component {

  componentDidMount() {
      this.props.getSolvedProblems();
      this.props.getProblems();
  }
    render(){
      const solved = this.props.problemReducer.solved;
      const allProblems = this.props.problemReducer.allProblems;
        return(
            <div className="background">
                <div>
                  <Header />
                </div>
                <div className="contentContainer">
                  <div>
                    <Nav />
                  </div>
                  <div className="dashboard">
                    <div>
                    <h1>Finished Sprints</h1>
                    <table className="problemTable">
                    {solved.map((item,index) => {
                      var problemName ='';
                          if(index % 2 === 0) {
                            allProblems.forEach(problem => {
                              if (item.problem_id === problem.id) {
                                problemName = problem.name;
                              }
                            });
                            return(
                          <tr>

                          <div><Link to={`/problemview/${item.problem_id}`}>{problemName}</Link></div>
                          <div>{item.points} Meters</div>

                          </tr>
                        )
                        } else {
                          allProblems.forEach(problem => {
                            if (item.problem_id === problem.id) {
                              problemName = problem.name;
                            }
                          });
                          return (
                          <tr className="offRow">
                          <div><Link to={`/problemview/${item.problem_id}`}>{problemName}</Link></div>
                          <div>{item.points} Meters</div>
                          </tr>
                        )
                        }
                    })}
                    </table>
                    </div>
                  </div>
                  <div>
                    <Stats />
                  </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;

  }

export default connect( mapStateToProps, { getSolvedProblems, getProblems } )( Dashboard );