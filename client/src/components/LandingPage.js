import React, {Component} from 'react'
import '../css/main.css'
import '../css/landing.css'
import logo from './../css/images/shoe2_white.svg'


class LandingPage extends Component {
    render(){

        return(
            <div>
                <div className="bg">
                    <div className="middle">
                            <div className="button-contain">
                                <img src={logo} alt="<CodeSprint/>" className="shoe"/>
                            </div>


                            <p className="middle-text">
                            Welcome to CodeSprint, the best javascript interview prep tool on the net. Here you can challenge yourself to solve "toy problems" similar to ones you might be asked to solve in a technical coding interview.
                            </p>
                            <div className="button-contain">
                                <a href={process.env.REACT_APP_AUTH_LOGIN}><button className="button1">Login</button></a>
                            </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default LandingPage
