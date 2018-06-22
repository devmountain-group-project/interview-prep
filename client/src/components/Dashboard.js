import React, {Component} from 'react'
import Header from './Header';
import Nav from './Nav';
import Stats from './Stats';
import './../css/dashboard.css';




class Dashboard extends Component {
    render(){
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
                      <h3>Finished Sprints</h3>
                      <table className="tableStyle">
                        <tr className="offRow">
                        <div>Problem 6</div>
                        <div>1000pts</div>
                        </tr>
                        <tr>
                            <div>Problem 7</div>
                            <div>1000pts</div>

                        </tr>
                        <tr className="offRow">
                          <div>Problem 8</div>
                          <div>1000pts</div>
                        </tr>
                        <tr>
                          <div>Problem 9</div>
                          <div>1000pts</div>
                        </tr>
                        <tr className="offRow">
                          <div>Problem 10</div>
                          <div>1000pts</div>
                        </tr>
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

export default Dashboard

// <img src={icon} />
// <h6 className="logo">{logo}</h6>
// <button>Logout</button>
