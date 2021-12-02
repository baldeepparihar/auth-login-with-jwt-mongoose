import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Success from './components/signup/success';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="signup-successful" element={<Success />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
