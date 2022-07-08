import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { RequireAuth } from './components/RequireAuth';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { SignIn } from './pages/sign-in/SignIn';


function App() {

  return (

    <div className="App">
      <div className='content'>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <p className="footer-text">Copyright 2022 Argent Bank</p>
      </footer>
    </div>


  );
}

export default App;
