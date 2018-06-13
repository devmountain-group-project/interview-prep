import React, {Component} from 'react'
import '../css/main.css'

class LandingPage extends Component {
    render(){
        return(
            <div>

                <div>
                    <h1 className="text header">Welcome to Interview Prepper</h1>
                    <p className ="text copy">Let's make some happy little clouds in our world. Trees live in your fan brush, but you have to scare them out. Of course he's a happy little stone, cause we don't have any other kind. Let's put some happy little clouds in our world. Trees cover up a multitude of sins. From all of us here, I want to wish you happy painting and God bless, my friends.</p>

                    <p className ="text copy">The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. No pressure. Just relax and watch it happen. Isn't that fantastic? This is your world, whatever makes you happy you can put in it. Go crazy.</p>
                </div>
                <div className="button-contain">
                    <a href="http://localhost:3005/auth"><button className="button1">Login</button></a>
                </div>
            </div>
        )
        
    }
}

export default LandingPage