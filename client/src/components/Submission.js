import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Stats from './Stats';
import '../css/submission.css'
import '../css/main.css'
import AddFile from './AddFile'
import { addProblem } from '../redux/reducers/problemReducer'


class Submission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            testUrl: '',
            fileToTest: '',
            difficulty: ['100', '500', '1000'],
            name: '',
            instructions: '',
        }
    }

    updateTestFile = (url) => {
        var newUrl= url.substring(0, url.indexOf('?'))
        console.log(newUrl)
        this.setState({testUrl: newUrl})
    }

    handleAddProblem = () => {
        this.props.addProblem(this.state.name, this.state.instructions, this.state.testUrl, this.state.difficulty).then( () => {
            this.setState({name: '', instructions: '', difficulty: ''})
        })
    }


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
                  <div className="submission">
                    <div>
                      <h1>Submit new problems</h1>
                      <h3>Thanks for helping our site grow</h3>
                      <p> You will need to insert the name, difficulty and instructions for the problem you want to submit. Before clicking on the submit problem button make sure to upload your unit test file first by clicking in the box that says "Click to upload file!". </p>
                      <h4> Be sure to visit the unit test example page first to see how to write your test file. </h4>
                    </div>

                        <div>
                          <Link to={'/unitTestExample'}><button className="unitTestExampleBtn">Unit test examples!!!</button></Link>
                        </div> 

                    <div>
                      <form>
                        <p> Problem name:</p>
                        <input value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value })}></input>
                        <p> Difficulty: </p>
                        <input type='radio' value={this.state.difficulty[0]} onChange={ (e) => this.setState({ difficulty: e.target.value })}></input>100 Meters<br />
                        <input type='radio' value={this.state.difficulty[1]} onChange={ (e) => this.setState({ difficulty: e.target.value })}></input>500 Meters<br />
                        <input type='radio' value={this.state.difficulty[2]} onChange={ (e) => this.setState({ difficulty: e.target.value })}></input>1000 Meters<br />
                        <p> Problem Instructions: </p>
                        <textarea name="description" value={this.state.instructions} onChange={ (e) => this.setState({ instructions: e.target.value })}></textarea>
                        <div>
                           <button className="submitButton" onClick={this.handleAddProblem}>Submit Problem</button>
                        </div>
                      </form>
                    <br />

                    </div>

                    <div className="sub-contain">
                      {this.state.testUrl ?
                          <div className= 'file-preview dropstyle'>
                              {this.state.testUrl}
                          </div> :
                          <AddFile updateTestFile= {this.updateTestFile}/>
                      }
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

function mapStateToProps (state) {
    return state;
}

export default connect(mapStateToProps, { addProblem }) (Submission)
