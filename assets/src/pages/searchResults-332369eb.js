import{j as r}from"../../node_modules/react/jsx-runtime-2771aab2.js";import{r as n}from"../../node_modules/react/index-4878784d.js";import{Link as c}from"../../node_modules/react-router-dom/dist/index-e0efea35.js";import{useLocation as a}from"../../node_modules/react-router/dist/index-9d52711a.js";import{motion as e}from"../../node_modules/framer-motion/dist/es/render/dom/motion-6f684e40.js";function f({className:o}){let{state:i}=a(),s=i.search;return n.useEffect(()=>{scrollBy({behavior:"smooth",top:window.innerHeight})},[]),r.jsxs(e.div,{className:"first-content",children:[r.jsxs(e.h1,{children:["Search for '",s[0].query,"': "]}),r.jsx(e.div,{className:o,children:s.map(t=>r.jsxs(e.div,{children:[r.jsx(c,{to:t.url,children:r.jsx(e.h2,{children:t.page},t.page)}),r.jsx(e.p,{children:t.para})]}))})]})}export{f as default};