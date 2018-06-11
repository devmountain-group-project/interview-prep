import React, {Component} from 'react'
import Embed from 'react-runkit'

class ProblemView extends Component {
    render(){
        return(
            <div>
                <div className= 'code-editor'>
                    <Embed/>
                </div>
            </div>
        )
    }
}

export default ProblemView