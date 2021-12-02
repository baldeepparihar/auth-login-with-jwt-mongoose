import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__header">
                <span className="L1">P</span> 
                <span className="L2">l</span> 
                <span className="L3">e</span> 
                <span className="L4">a</span> 
                <span className="L5">s</span> 
                <span className="L6">e </span>

                <span className="L7">l</span>
                <span className="L8">o</span> 
                <span className="L9">g </span>

                <span className="L10">i</span> 
                <span className="L11">n</span> 
                <span className="L12">t</span>
                <span className="L13">o </span>

                <span className="L14">y</span> 
                <span className="L15">o</span> 
                <span className="L16">u</span> 
                <span className="L17">r</span>

                <span className="L18">a</span> 
                <span className="L19">c</span> 
                <span className="L20">c</span>
                <span className="L21">o</span>
                <span className="L22">u</span>
                <span className="L23">n</span>
                <span className="L24">t</span>
                <span className="L25">.</span>
            </div>


            <h3>Fill out your log in information</h3>
            <form>
                <input type="email" name="loginEmail" id="loginEmail" />
                <label htmlFor="loginEmail">Email</label>
                <input type="password" name="loginPassword" id="loginPassword" />
                <label htmlFor="loginPassword">Password</label>
            </form>
        </div>
    )
}

export default Login;
