import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './navbar';
import Landing from './landing.jsx';
import AudioPlayer from './audioplayer';
import { AnimatePresence} from 'framer-motion';
import * as songs from './music/songs';

import Home from './pages/home';
import World from './pages/world';
import Server from './pages/server';
import Lore from './pages/lore';
import Locations from './pages/locations';
import MapPage from './pages/mappage';
import Organizations from './pages/organizations';
import Nations from './pages/nations';
import Characters from './pages/characters';
import OCs from './pages/ocs';
import NPCs from './pages/npcs';
import SearchResults from './pages/searchResults';


export default function App() {
  let songsArray = Object.values(songs);
  let audio = songsArray.at(Math.floor(Math.random()*(songsArray.length-1)));
  const[muted, setMuted] = useState(true);
  const[song, setSong] = useState(audio);
  const[content, setContent] = useState(false);
  
  function toggleMute() {
    console.log("toggle");
    setMuted(!muted);
  }
  function nextSong() {
    let nextIndex = Math.floor(Math.random()*(songsArray.length-1));
    audio = songsArray.at(nextIndex);
    if(song == audio) {
        audio = songsArray.at((nextIndex == 0) ? nextIndex+1 : nextIndex-1);
    }
    setSong(audio);
  }
  useEffect(() => {
    // const fetchPages = async () => await fetch('/content.json').then((res) => res.json()).then(res => {content=res['pages']})
    const fetchPages = async () => {
      await fetch('./content.json').then((res) => res.json()).then(res => {setContent(res.pages);}).catch((err) => console.error(err));
    }
    fetchPages();
  }, [])
  return (
    <>
      <Landing />
      <AudioPlayer muted={muted} toggleMute={toggleMute} nextSong={nextSong} song={song}/>
      <Navbar content={content}/>
      {content && <AnimatePresence mode="wait">
        <Routes key={"Route"}>
            <Route exact path='/' key={"home"} element={<Home key={location.pathname} className={"first-content"} page={content}/>}/>
            <Route path='/server' key={"server"} element={<Server key={location.pathname} className={"first-content"} content={content}/>}/>
            <Route path='/world' key={"world"} element={<World key={location.pathname} className={"first-content"} content={content}/>}>
              <Route path='lore' loader={Lore.loader} key={"lore"} element={<Lore key={location.pathname} className={"content"} content={content}/>}/>
              <Route path='locations' key={"locations"} element={<Locations key={location.pathname} className={"content"} content={content}/>}>
                <Route path='map' key={'map'} element={<MapPage key={location.pathname} className={"content "} content={content}/>}/>
              </Route>
              <Route path='organizations' key={"organizations"} element={<Organizations key={location.pathname} className={"content"} content={content}/>}/>
              <Route path='nations' key={"nations"} element={<Nations key={location.pathname} className={"content"} content={content}/>}/>
            </Route>
            <Route path='/characters' key={"characters"} element={<Characters key={location.pathname} className={"first-content"} content={content}/>}>
              <Route path='oc' key={"ocs"} element={<OCs key={location.pathname} className={"content"} content={content}/>}/>
              <Route path='npc' key={"npcs"} element={<NPCs key={location.pathname} className={"content"} content={content}/>}/>
            </Route>
            <Route path="/searchResults" key={"search-results"} element={<SearchResults key={location.pathname} className={"content"}/>}/>
          </Routes>
        {/* <Element key={location.pathname} className="first-content"/> */}
        {/* {React.cloneElement(element, { key: location.pathname, className: 'first-content'})} */}
      </AnimatePresence>}
    </>
  );
}