import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Video from './pages/video';
// import Marketplace from './pages/Marketplace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Friends from './pages/friends';
import Groups from './pages/groups';

function App() {
  return ( 
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/groups" element={<Groups />} />
        

      </Routes>
    </Router>
    // <Navigation/>
    /* </AuthProvider> */
  );
}

export default App;