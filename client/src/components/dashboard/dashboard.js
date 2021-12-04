import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

let firstName;
let lastName;
let email;

function Dashboard() {
const navigate = useNavigate();


async function getUser() {
    const req = await fetch('http://localhost:8080/loggedUser', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    })

    const data = await req.json()
    if (data.status === 'ok') {
        console.log(data.user)
        firstName = data.user.firstName;
        lastName = data.user.lastName;
        email = data.user.email;
    } else {
        alert('no data')
    }
}



useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from useEffect: ', token)
    if (token) {
        const user = jwt.decode(token)
        console.log('User from useEffect: ', user)
        if(!user) {
            localStorage.removeItem('token')
            navigate('/login')
        } 
    }
}, [getUser(), firstName, lastName, email, navigate])

    return (
        <div>
            <h1>Welcome to your dashboard {firstName !== undefined ? firstName : 'no name'}</h1>
        </div>
    )
}

export default Dashboard;