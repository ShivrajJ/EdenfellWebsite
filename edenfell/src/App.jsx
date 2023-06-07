import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Server from './pages/server';
import World from './pages/world';
import Lore from './pages/lore';
import Locations from './pages/locations';
import Organizations from './pages/organizations';
import Nations from './pages/nations';
import Characters from './pages/characters';
import OCs from './pages/ocs';
import NPCs from './pages/npcs';
import Navbar from './navbar';
import Landing from './landing.jsx';


function App() {
  return (
    <Router>
      <Landing />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/server' element={<Server />}/>
        <Route path='/world' element={<World />}>
          <Route path='lore' element={<Lore />}/>
          <Route path='locations' element={<Locations />}/>
          <Route path='organizations' element={<Organizations />}/>
          <Route path='nations' element={<Nations />}/>
        </Route>
        <Route path='/characters' element={<Characters />}>
          <Route path='oc' element={<OCs />}/>
          <Route path='npc' element={<NPCs />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;