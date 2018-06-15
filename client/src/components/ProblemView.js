import React, {Component} from 'react'
import Embed from 'react-runkit'
import axios from 'axios'
import '../css/problemView.css'

class ProblemView extends Component {
    state ={
        code: '',
        notebookRef: undefined,
        finalSubmit: true
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

    render(){
        return(
            <div>

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
    }
}

export default ProblemView