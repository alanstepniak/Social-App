import {Link} from 'react-router-dom';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/" id='home'>home</Link>
      <Link to="/login" id='login'>login</Link>
      <Link to="/signup" id='signUp'>sign up</Link>
      </nav>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
    </Routes>
    </div>
  );
}

export default App;


