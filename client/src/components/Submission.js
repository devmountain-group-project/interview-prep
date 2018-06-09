import React, {Component} from 'react'
import AddFile from './AddFile'

class Submission extends Component {
    state = {
        testFile: '',
        fileToTest: ''
    }

    updateTestFile(file){
        this.setState({testFile: file})
    }
    render(){
        return(
            <div>
                {this.state.testFile ? 
                    <div className= 'file-preview'>
                        {this.state.testFile}
                    </div> :
                    <AddFile/>
                }
            </div>
        )
    }
}

export default Submission