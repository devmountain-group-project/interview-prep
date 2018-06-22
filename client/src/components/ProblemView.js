import React, {Component} from 'react'
import Embed from 'react-runkit'
import { connect } from 'react-redux'
import axios from 'axios'
//import './../css/problemView.css';
import{getProblemByID} from './../redux/reducers/problemReducer.js'
import results from '../jasmine-test-results.json'



class ProblemView extends Component {
  constructor() {
    super();
    this.state ={
        code: '',
        notebookRef: undefined,
        testFile: '',
        finalSubmit: true,
        problemID: null,
        retrievedFile: false


    }
  }

    // RETURNS A NOTEBOOK OBJECT
    storeRef = (notebook) =>{
        this.setState({
            notebookRef: notebook
        })
    }
    // GRABS CODE FROM RUNKIT NOTEBOOK
    getNotebook = () => {
        this.state.notebookRef.getSource((source) => {
            this.setState({code: source}, () => this.writeFile())
        })
    }

    // WRITES TEMP FILE WITH FS
    writeFile = () =>{
        axios.post('api/writeFile', {content: this.state.code}).then(res=>{
        })
    }
    
    //LOADING INSTRUCTIONS
    componentDidMount = () => {
        this.props.getProblemByID(this.props.match.params.problem_id)
    }

    // DELETES TEMP FILE WITH FS
    deleteFile = () => {
        axios.delete('/api/deleteFile')
    }

    // FINAL SUBMISSION ONCE TESTS HAVE PASSED
    submit = () => {
        this.setState({finalSubmit: false}, this.deleteFile())
    }

    // DISPLAYS TEST RESULTS
    resultsToDisplay =(results) =>{
        const arr = []
        for  (var key in results){
          const suite = results[key]
          suite.specs.map((spec, index)=>{
            const {description} = spec
            return (
              arr.push(spec)
            )
          })
        }
        return arr.map((spec, index)=>{
          return(
            <h1>
              {spec.description}
            </h1>
          )
        })
      }

    runTest = () => {
        axios.post('/api/runTest', )
    }

    getFile = () => {
        axios.get(this.props.state.problemReducer.problem[0].unit_test_file).then(res => {
            this.setState({testFile: res.data, retrievedFile: true})
        })
    }

    writeTestFile = () => {
        console.log('hitting write test', this.state.testFile)
        axios.post('/api/writeTestFile', {content: this.state.testFile})
    }

    render(){
      const { id, problem } = this.props;
      if(this.props.state.problemReducer && this.props.state.problemReducer.problem[0]) {
          if(!this.state.retrievedFile) {
            this.getFile()
          }
          if(this.state.testFile){
              console.log('the if', this.state.testFile)
            this.writeTestFile()
          }
        return(


            <div className= 'problem-view'>

                <div className= 'left-container'>
                  <div className= 'instructions'>
                  {this.props.state.problemReducer.problem[0].instructions}
                  </div>
                  <div className= 'spec-runner'>                 
                    {this.resultsToDisplay(results)}
                  </div>
                  
                </div>

                <div className= 'code-editor'>
                    {/* THIS IS THE RUNKIT COMPONENT */}
                    <Embed onLoad = {(e) => {this.storeRef(e)}} onEvaluate={() => {
                        this.getNotebook()

                    }} minHeight='500px'/>
                    
                </div>
                {this.state.finalSubmit ?
                    <button onClick={() =>this.submit()}>Final Submission</button> :
                    null}


            </div>

        )
      } else {
        return <div>
                  <p>loading</p>
                </div>
      }
    }
}


function mapStateToProps(state) {
    return {
        state
    };

  }

export default connect( mapStateToProps, { getProblemByID } )( ProblemView );
