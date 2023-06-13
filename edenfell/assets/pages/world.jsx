import React from 'react';
import {motion} from 'framer-motion';
import {Outlet} from 'react-router-dom';

export default function World({className, content}) {
    return (
        <motion.div  className={className || 'content'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} id="world">
            <motion.h1>World</motion.h1>
            <Outlet/>
        </motion.div>
    );
};