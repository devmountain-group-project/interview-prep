import React, {Component} from 'react'
import '../css/main.css'
import '../css/landing.css'

class LandingPage extends Component {
    render(){
        const logo = "<CodeSprint/>";
        return(
            <div>
                <div className="bg">
                    <div className="middle">
                            <h6 className="logo-landing">{logo}</h6>
                            <p className="middle-text">Busey ipsum dolor sit amet. Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibres without warning</p>


                            <p className="middle-text">These kind of things only happen for the first time once.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment. </p>
                            <div className="button-contain">
                                <a href="http://localhost:3005/auth"><button className="button1">Login</button></a>
                            </div>
                    </div>

                <div className="header">
                    <h6 className="logo">{logo}</h6>
                    <a href="http://localhost:3005/auth"><button>Login</button></a>
                </div>
                <div>
                    <h2> Sharpen your skills </h2>
                    <p> Our website is a place for you to come and brush up on your coding. Master your Javascript skills with toy problems of varying difficulty levels. </p>

                </div>
            </div>
          </div>
        )

    }
}

export default LandingPage
