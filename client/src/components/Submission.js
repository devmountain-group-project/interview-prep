import React, {Component} from 'react'
import { connect } from 'react-redux';
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
            name: '',
            instructions: '',
        }
    }

    updateTestFile = (url) => {
        var newUrl= url.substring(0, url.indexOf('?'))
        this.setState({testUrl: newUrl})
    }

    handleAddProblem = () => {
        this.props.addProblem(this.state.name, this.state.instructions, this.state.testUrl).then( () => {
            this.setState({name: '', instructions: ''})
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
                      <h3>Thanks for helping Interview Prepper grow</h3>
                      <p>You ever roasted doughnuts?You gotta go through it to see there aint nothing to it. Listen to the silence. And when the silence is deafening, youre in the center of your own universe.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what youre hearing.</p>
                    </div>
                    <div>
                      <form>
                        <p> Problem name:</p>
                        <input value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value})}></input>
                        <p> Interview Company:</p>
                        <input></input><br />
                        <p> Problem Description:</p>
                        <textarea name="description" value={this.state.instructions} onChange={ (e) => this.setState({ instructions: e.target.value})}></textarea>
                        <div>
                           <button onClick={this.handleAddProblem}>SUBMIT PROBLEM</button>
                        </div>
                      </form>
                    <br />

                    </div>
                    <div className="sub-contain">
                      {this.state.testFile ?
                          <div className= 'file-preview dropstyle'>
                              {this.state.testFile}
                          </div> :
                          <AddFile updateTestfile= {this.updateTestFile}/>
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
