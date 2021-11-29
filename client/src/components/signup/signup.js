import React from 'react'
import './signup.css';

function Signup() {
    return(
        <div className="signup">
                <h1>Please fill out the form.</h1>
            <form className="signup__form" action="submit">
                <div className="signup__form--names">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" />
                </div>
                <div className="signup__form--email" >
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="signup__form--passwords">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                    <label htmlFor="re-type-password">Re-Type Password</label>
                    <input type="password" id="password" />
                </div>
            </form>
        </div>
    )
}

export default Signup;