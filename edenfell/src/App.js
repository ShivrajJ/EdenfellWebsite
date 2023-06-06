import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Server from './pages/server';
import World from './pages/world';
import Characters from './pages/characters';
import Navbar from './navbar';
import Landing from './landing.js';

function App() {
  return (
    <Router>
      <Landing />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/server' element={<Server />}/>
        <Route path='/world' element={<World />}/>
        <Route path='/characters' element={<Characters />}/>
      </Routes>
    </Router>
  );
}

export default App;