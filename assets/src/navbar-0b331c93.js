import{j as t}from"../node_modules/react/jsx-runtime-2771aab2.js";import{r as s}from"../node_modules/react/index-4878784d.js";import c from"./menu-8d29f389.js";import p from"./logo-1cecedee.js";import d from"./emblem-fce20ee3.js";import x from"./dropdown-2d816773.js";import{motion as i}from"../node_modules/framer-motion/dist/es/render/dom/motion-6f684e40.js";function y({content:m}){const[o,e]=s.useState(!1),r=window.matchMedia("(orientation:portrait)"),[a,n]=s.useState(r.matches);r.onchange=l=>{console.log("changing orientation"),l.matches?n(!0):n(!1)};function u(){e(!o)}return t.jsxs(t.Fragment,{children:[t.jsx(i.nav,{className:"navbar",children:t.jsxs(i.div,{layout:!0,className:"nav-div",children:[t.jsx(p,{layout:!0,setMenuIsExpanded:e}),t.jsx(d,{layout:!0,portrait:a}),t.jsx(x,{layout:!0,expandMenu:u})]})}),t.jsx(c,{expanded:o,portrait:a,setMenuIsExpanded:e,content:m})]})}export{y as default};
