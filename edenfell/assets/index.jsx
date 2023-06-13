import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider, Routes, Route, createRoutesFromElements} from 'react-router-dom';
import './index.css';
import {default as App, loader as AppLoader} from './App';
import {default as Home, loader as HomeLoader} from './pages/home';
import {default as World, loader as WorldLoader} from './pages/world';
import {default as Server, loader as ServerLoader} from './pages/server';
import {default as Lore, loader as LoreLoader} from './pages/lore';
import {default as Locations, loader as LoactionsLoader} from './pages/locations';
import {default as MapPage, loader as MapPageLoader} from './pages/mappage';
import {default as Organizations, loader as OrganizationsLoader} from './pages/organizations';
import {default as Nations, loader as NationsLoader} from './pages/nations';
import {default as Characters, loader as CharactersLoader} from './pages/characters';
import {default as OCs, loader as OCsLoader} from './pages/ocs';
import {default as NPCs, loader as NPCsLoader} from './pages/npcs';
import SearchResults from './pages/searchResults';
import reportWebVitals from './reportWebVitals';


const router = createHashRouter(createRoutesFromElements(
  <Route loader={AppLoader} exact path='/' element={<App/>}>
    <Route path='/home' loader={Home.loader} key={"home"} element={<Home key={location.pathname} className={"first-content"} />}/>
    <Route path='/server' loader={Server.loader} key={"server"} element={<Server key={location.pathname} className={"first-content"} />}/>
    <Route path='/world' loader={World.loader} key={"world"} element={<World key={location.pathname} className={"first-content"} />}>
      <Route path='lore' loader={Lore.loader} key={"lore"} element={<Content key={location.pathname} className={"content"} pageName={"lore"}/>}/>
      <Route path='locations' loader={Locations.loader} key={"locations"} element={<Locations key={location.pathname} className={"content"} />}>
        <Route path='map' loader={MapPage.loader} key={'map'} element={<MapPage key={location.pathname} className={"content "} />}/>
      </Route>
      <Route path='organizations' loader={Organizations.loader} key={"organizations"} element={<Organizations key={location.pathname} className={"content"} />}/>
      <Route path='nations' loader={Nations.loader} key={"nations"} element={<Nations key={location.pathname} className={"content"} />}/>
    </Route>
    <Route path='/characters' loader={Characters.loader} key={"characters"} element={<Characters key={location.pathname} className={"first-content"} />}>
      <Route path='oc' loader={OCs.loader} key={"ocs"} element={<OCs key={location.pathname} className={"content"} />}/>
      <Route path='npc' loader={NPCs.loader} key={"npcs"} element={<NPCs key={location.pathname} className={"content"} />}/>
    </Route>
    <Route path="/searchResults" key={"search-results"} element={<SearchResults key={location.pathname} className={"content"}/>}/>
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
