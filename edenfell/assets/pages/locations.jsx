import React from 'react';
import {motion} from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Map from '../map';


export default function Locations({className, content}) {
    return(
        <motion.div  className={className || 'content'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} id="locations">
            <motion.h1>Locations</motion.h1>
            <Map />
            <Outlet />
        </motion.div>
    );
}