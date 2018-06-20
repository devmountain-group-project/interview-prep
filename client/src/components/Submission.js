import React, {Component} from 'react'
import { connect } from 'react-redux';
import Nav from './Nav';
import '../css/submission.css'
import '../css/main.css'
import AddFile from './AddFile'
import { addProblem } from '../redux/reducers/problemReducer'


class Submission extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            testFile: '',
            fileToTest: '',
            name: '',
            instructions: '',
        }
    }

    updateTestFile(file){
        this.setState({testFile: file})
    }

    handleAddProblem = () => {
        this.props.addProblem(this.state.name, this.state.instructions).then( () => {
            this.setState({name: '', instructions: ''})
        })
    }

    render(){
        return(
            <div>

                <Nav />
                <div>
                    <h1 className="text header">Submit new problems</h1>
                    <h3 className="text header-med">Thanks for helping Interview Prepper grow</h3>
                    <p className ="text copy">You ever roasted doughnuts?You gotta go through it to see there ain't nothing to it.Listen to the silence. And when the silence is deafening, you're in the center of your own universe.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing. 
                    </p>
                </div>
                
                 <div className="sub-contain">
                    <form>
                        <p className="input-text"> Problem name:</p>
                        <input type="text" name="problemname" className="text input1" value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value})}></input>
                        <p className="input-text"> Interview Company:</p>
                        <input type="text" name="company" className="text input1"></input><br />
                        <p className="input-text"> Problem Instructions:</p>
                        <textarea name="description" className="text input3" value={this.state.instructions} onChange={ (e) => this.setState({ instructions: e.target.value})}></textarea>
                    </form>
                    <br />

                 <div>
                    <button onClick={this.handleAddProblem}>SUBMIT PROBLEM</button>
                 </div>

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
        )
    }
}

function mapStateToProps (state) {
    return state;
}

export default connect(mapStateToProps, { addProblem }) (Submission)