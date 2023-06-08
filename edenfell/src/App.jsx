import React from 'react';
import './App.css';
import { useRoutes, useLocation} from 'react-router-dom';
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
import { AnimatePresence } from 'framer-motion';


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/world",
      element: <World />,
      children:[
        {
          path:"lore",
          element:<Lore />
        },
        {
          path:"locations",
          element:<Locations />
        },
        {
          path:"organizations",
          element:<Organizations />
        },
        {
          path:"nations",
          element:<Nations />
        }
      ]
    },
    {
      path:"/characters",
      element:<Characters />,
      children:[
        {
          path:"oc",
          element:<OCs />
        },
        {
          path:"npc",
          element:<NPCs />
        }
      ]
    },
    {
      path:"/server",
      element:<Server />
    }
  ])
  const location = useLocation();
  return (
    <>
      <Landing />
      <Navbar />
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname})}
      </AnimatePresence>
        {/* <Routes key={"Route"}>
          <Route exact path='/' key={"home"} element={<Home />}/>
          <Route path='/server' key={"server"} element={<Server />}/>
          <Route path='/world' key={"world"} element={<World />}>
          <Route path='lore' key={"lore"} element={<Lore />}/>
          <Route path='locations' key={"locations"} element={<Locations />}/>
          <Route path='organizations' key={"organizations"} element={<Organizations />}/>
          <Route path='nations' key={"nations"} element={<Nations />}/>
          </Route>
          <Route path='/characters' key={"characters"} element={<Characters />}>
          <Route path='oc' key={"ocs"} element={<OCs />}/>
          <Route path='npc' key={"npcs"} element={<NPCs />}/>
          </Route>
        </Routes> */}
    </>
  );
}

export default App;