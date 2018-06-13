import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/nav.css'


class Nav extends Component {

    render() {
        return (
            <div className="nav_contain">
                <div className="nav">
                    <Link to={`/dashboard`}><h2 className="text nav_text">Dashboard</h2></Link>
                    <Link to={`/problems`}><h2 className="text nav_text">Problems</h2></Link>
                    <Link to={`/submission`}><h2 className="text nav_text">Submit</h2></Link>
                </div>
                <div className="nav">
                <h1 className="text nav_header">Interview Prepper</h1>
                </div>              
                <div className="logout">
                     <a href="http://localhost:3005/auth/logout"><h2 className="text nav_text logout_text">Logout</h2></a>
                </div>              
            </div>
        )
    }
}



export default Nav;