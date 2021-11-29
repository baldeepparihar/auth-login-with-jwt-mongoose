import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
