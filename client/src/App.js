import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Success from './components/signup/success';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="signup-successful" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
