import React from 'react'
import './signup.css';

function Signup() {
    return(
        <div className="signup">
            <form className="signup-form" action="submit">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" />
                </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                    <label htmlFor="repeat-password"></label>
                    <input type="repeat-password" />
                </div>
            </form>
        </div>
    )
}

export default Signup;