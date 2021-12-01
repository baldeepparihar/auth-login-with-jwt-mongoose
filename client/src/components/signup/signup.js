import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signupUser(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        }),
    })

    const data = await response.json()

    if(data.status === 'ok') {
        navigate('/login')
    }

    }

//    useEffect(() => {
//     if(firstName !== '') {
//         console.log(firstName);
//     }
//    }, [firstName])


    return(
        <div className="signup">
            <div className="signup__header">
                <span className="signup__header--p rotate">P</span><span className="signup__header--sentence">lease fill out the form.</span>
            </div>
            <form className="signup__form" action="submit">
                <div className="signup__form--names">
                    <input 
                        id="firstName" 
                        class="firstName-input" 
                        type="text" placeholder=" " 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label 
                        className="firstName-label" 
                        htmlFor="firstName">
                            First Name
                    </label>
                    <input 
                        id="lastName" 
                        className="lastName-input" 
                        type="text" 
                        placeholder=" "
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label 
                        className="lastName-label" 
                        htmlFor="lastName">
                            Last Name
                    </label>
                </div>
                <div className="signup__form--email" >
                    <input 
                        className="email-input" 
                        type="email" id="email" 
                        placeholder=" " 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label 
                        className="email-label" 
                        htmlFor="email">
                            Email
                    </label>
                </div>
                <div className="signup__form--passwords">
                    <input 
                        className="password-input"
                        type="password" 
                        id="password" 
                        placeholder=" " 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <label 
                        className="password-label" 
                        htmlFor="password">
                            Password
                    </label>
                    <input 
                        className="confirmPassword-input" 
                        type="password" 
                        id="confirmPassword" 
                        placeholder=" " />
                    <label 
                        className="confirmPassword-label" 
                        htmlFor="confirmPassword">
                            Confirm Password
                    </label>
                </div>
                <button 
                    className="signup__form--button"
                    type="submit"
                    value="Signup"
                    onClick={(e) => console.log(e.target.value)}>
                        Submit
                </button>
            </form>
        </div>
    )
}

export default Signup;