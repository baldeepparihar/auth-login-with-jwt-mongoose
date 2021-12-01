import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css';

function SignupSuccess() {
    const navigate = useNavigate();

    return (
        <div className="success">
            <h1>Your user profile was successfully created!</h1>
        </div>
    )
}

export default SignupSuccess;
