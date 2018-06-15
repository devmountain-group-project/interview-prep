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
        notebookRef: undefined
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
    componentDidMount() {
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
                    <Embed onLoad = {(e) => {this.storeRef(e)}} onEvaluate={() => {
                        this.getNotebook()


                    }}/>
                </div>
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
