import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the MongoDb and Jason Web Token signup and signin app!</h1>
            <h3>Click below to begin the registration process</h3>
            <button>Register</button>
        </div>
    )
}

export default Home;
