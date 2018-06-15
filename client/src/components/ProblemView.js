import React, {Component} from 'react'
import Embed from 'react-runkit'
import { connect } from 'react-redux'
import axios from 'axios'
//import './../css/problemView.css';
import{getProblemByID, id, problem} from './../redux/reducers/problemReducer.js'

class ProblemView extends Component {
  constructor() {
    super();
    this.state ={
        code: '',
        notebookRef: undefined,
        finalSubmit: true
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
    writeFile = () => {
        axios.post('api/writeFile', {content: this.state.code}).then(res=>{
        })
    }


    // DELETES TEMP FILE WITH FS
    deleteFile = () => {
        axios.delete('/api/deleteFile')
    }
    
    // FINAL SUBMISSION ONCE TESTS HAVE PASSED
    submit = () => {
        this.setState({finalSubmit: false}, this.deleteFile())
    }


    componentDidMount() {
      //Loading instructions
        this.props.getProblemByID(this.props.problemReducer.id);
    }



    render(){
      const { id, problem } = this.props;
      if(this.props.problemReducer && this.props.problemReducer.problem[0]) {
        return(


            <div className= 'problem-view'>
                <div className= 'left-container'>
                  <div className= 'instructions'>
                  {this.props.problemReducer.problem[0].instructions}
                  </div>
                  <div className= 'spec-runner'>
                    SpecRunner
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
    return state;

  }

export default connect( mapStateToProps, { getProblemByID } )( ProblemView );
