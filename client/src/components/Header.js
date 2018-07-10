import React, {Component} from 'react'
import '../css/main.css'
import '../css/header.css'
const logo = require('./../css/images/shoe.png');
// const icon = require('./../css/images/shoe-icon.png');

class Header extends Component {

    render() {

        return (
            <div className="nav_contain">
                <div className="nav">
                <div className='header'>
                {/* <img src={icon} /> */}
                <img src={logo} alt="pic"/>
                <a href={process.env.REACT_APP_AUTH_LOGOUT}><button>Logout</button></a>
                </div>
                </div>
            </div>
        )
    }
}



export default Header;


// <h6 className="logo">{logo}</h6>
//     <Link to={`/dashboard`}><h2 className="text nav_text">Dashboard</h2></Link>
//     <Link to={`/problems`}><h2 className="text nav_text">Problems</h2></Link>
//     <Link to={`/submission`}><h2 className="text nav_text">Submit</h2></Link>
// </div>
// <div className="nav">
// <h1 className="text nav_header">{title}</h1>
// </div>
// <div className="logout">
//      <a href="http://localhost:3005/auth/logout"><h2 className="text nav_text logout_text">Logout</h2></a>
