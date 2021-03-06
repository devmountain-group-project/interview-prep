import React, {Component} from 'react'
import Embed from 'react-runkit'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './../css/problemView.css';
import{getProblemByID} from './../redux/reducers/problemReducer.js'


const loading = require('./../css/images/loading.gif')
const flag = require('./../css/images/flag.png')
const exit = require('./../css/images/error.png')


class ProblemView extends Component {
  constructor() {
    super();
    this.state ={
        code: '',
        notebookRef: undefined,
        testFile: '',
        testFileExists: false,
        finalSubmit: false,
        problemID: null,
        retrievedFile: false,
        showResults: false,
        results: {},
        toggleTabs: false,
        activeTab: false
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
            this.runTest()
        })
    }
    //LOADING INSTRUCTIONS
    componentDidMount = () => {
        this.props.getProblemByID(this.props.match.params.problem_id)
    }
  

    // FINAL SUBMISSION ONCE TESTS HAVE PASSED
    submit = () => {
        const problem_id = this.props.state.problemReducer.problem[0].id
        const difficulty = this.props.state.problemReducer.problem[0].difficulty
        const solution = this.state.code
        axios.post('/api/completeProblem', {problem_id, difficulty, solution}).then(res=> {
            this.setState({finalSubmit: false})
        })
       
    }

    // DISPLAYS TEST RESULTS
    resultsToDisplay =(results) =>{
        const arr = []
        for  (var key in results){
          const suite = results[key]
          suite.specs.map((spec, index)=>{
            return (
              arr.push(spec)
            )
          })
        }
    
        return arr.map((spec, index)=>{
            console.log('this is the spec', spec)
          return(
            <div key= {index}>
                <h1>{spec.description}</h1>
                <h3>{spec.status}</h3>
            </div>
          )
        })
      }

    runTest = () => {
        console.log('running test')
        axios.get('http://localhost:3005/api/runTest').then(res => {
            console.log(res.data)
            this.setState({showResults: true, results: res.data}, this.checkFinalSubmit )
        })
    }

    getFile = () => {
        axios.get(this.props.state.problemReducer.problem[0].unit_test_file).then(res => {
            this.setState({testFile: res.data, retrievedFile: true})
        })
    }

    writeTestFile = () => {
        this.setState({testFileExists: true})
        axios.post('/api/writeTestFile', {content: this.state.testFile})
    }

    handleToggleTabTrue =() => {
        
        this.setState({toggleTabs: false , activeTab: false})

    }
    handleToggleTabFalse = () => {
        
        this.setState({toggleTabs: true , activeTab: true})
    }

    checkFinalSubmit = () => {
        var results = this.state.results
        var failed = 0
        var arr = []
        for  (var key in results){
            const suite = results[key]
            suite.specs.map((spec, index)=>{
              return (
                arr.push(spec)
              )
            })
          }
        for(var i = 0; i < arr.length; i ++){
            if(arr[i].status === "failed"){
                failed ++
            }
        }
        if(failed === 0){
            console.log('hitting this stuff')
            this.setState({finalSubmit: true})
        }
    }

    render(){
    //   const { id, problem } = this.props;
      if(this.props.state.problemReducer && this.props.state.problemReducer.problem[0]) {
          if(!this.state.retrievedFile) {
            this.getFile()
          }
          if(this.state.testFile && !this.state.testFileExists){
            this.writeTestFile()
          }
        return(


            <div className= 'problem-view'>
                <div className='exit'>
                <Link to={'/dashboard'}><img src={exit} alt="pic"/></Link>
                </div>
                <div className= 'left-container'>

                    <div className='problem-header'>
                        <h3>{this.props.state.problemReducer.problem[0].name}</h3>
                        <h3>{this.props.state.problemReducer.problem[0].difficulty} meters</h3>
                    </div>
                    <div className='problem-tabs'>
                        <div className={!this.state.activeTab ? 'title-tab' : 'title-tab-off'} onClick={()=> this.handleToggleTabTrue()}>Instructions</div><div className={this.state.activeTab ? 'title-tab' : 'title-tab-off'} onClick={()=> this.handleToggleTabFalse()}>Output</div>
                    </div>
                    {this.state.toggleTabs ?
                        <div className = 'output instructions'>
                            {/* DISPLAYS THE JASMINE TEST RESULTS */}
                            {this.state.results ?
                                <div>
                                    {this.resultsToDisplay(this.state.results)}
                                </div>: null} 
                        </div>: 

                        <div className= 'instructions'>
                            {this.props.state.problemReducer.problem[0].instructions}
                        </div>}
                </div>

                <div className= 'code-editor'>
                  <div className= 'code-header'>
                      <div className='final-submit'>
                        {this.state.finalSubmit ?
                          <Link to={'/dashboard'}><button onClick={() =>this.submit()}>Final Submission</button></Link> :
                        null}
                        <img className="flag" src={flag} alt="pic"/>
                      </div>
                  </div>
                    {/* THIS IS THE RUNKIT COMPONENT */}
                    <Embed onLoad = {(e) => {this.storeRef(e)}} onEvaluate={() => {
                        this.getNotebook()

                    }} minHeight='481px'/>

                </div>
            </div>

        )
      } else {
        return <div className="loading">
                  <img src={loading} alt="pic"/>
                  <p>Loading...</p>
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
