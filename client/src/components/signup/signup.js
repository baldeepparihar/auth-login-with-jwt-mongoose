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
                    <label className="firstName-label" htmlFor="firstName">First Name</label>
                    <input id="firstName" class="firstName-input" type="text" />
                    <label className="lastName-label" htmlFor="lastName">Last Name</label>
                    <input id="lastName" className="lastName-input" type="text" />
                </div>
                <div className="signup__form--email" >
                    <label className="email-label" htmlFor="email">Email</label>
                    <input className="email-input" type="email" id="email" />
                </div>
                <div className="signup__form--passwords">
                    <label className="password-label" htmlFor="password">Password</label>
                    <input className="password-input" type="password" id="password" />
                    <label className="retypePassword-label" htmlFor="re-type-password">Re-Type Password</label>
                    <input className="retypePassword-input" type="password" id="password" />
                </div>
            </form>
        </div>
    )
}

export default Signup;