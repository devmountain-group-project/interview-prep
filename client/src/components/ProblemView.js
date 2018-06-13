import React, {Component} from 'react'
import Embed from 'react-runkit'
import axios from 'axios'

class ProblemView extends Component {
    state ={
        code: '',
        notebookRef: undefined
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

    render(){
        return(
            <div>
                <div className= 'code-editor'>
                    <Embed onLoad = {(e) => {this.storeRef(e)}} onEvaluate={() => {
                        this.getNotebook()
                        
                        
                    }}/>
                </div>
            </div>
        )
    }
}

export default ProblemView