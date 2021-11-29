import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
