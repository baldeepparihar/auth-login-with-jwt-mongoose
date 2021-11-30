import React from 'react'
import './signup.css';

function Signup() {
    return(
        <div className="signup">
            <div className="signup__header">
                <span className="signup__header--p rotate">P</span><span className="signup__header--sentence">lease fill out the form.</span>
            </div>
            <form className="signup__form" action="submit">
                <div className="signup__form--names">
                    <input id="firstName" class="firstName-input" type="text" placeholder=" " />
                    <label className="firstName-label" htmlFor="firstName">First Name</label>
                    <input id="lastName" className="lastName-input" type="text" placeholder=" " />
                    <label className="lastName-label" htmlFor="lastName">Last Name</label>
                </div>
                <div className="signup__form--email" >
                    <input className="email-input" type="email" id="email" placeholder=" " />
                    <label className="email-label" htmlFor="email">Email</label>
                </div>
                <div className="signup__form--passwords">
                    <input className="password-input" type="password" id="password" placeholder=" " />
                    <label className="password-label" htmlFor="password">Password</label>
                    <input className="confirmPassword-input" type="password" id="confirmPassword" placeholder=" " />
                    <label className="confirmPassword-label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <button className="signup__form--button">Submit</button>
            </form>
        </div>
    )
}

export default Signup;