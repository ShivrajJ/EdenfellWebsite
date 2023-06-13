import React from 'react';
import {motion} from 'framer-motion';
import {Outlet} from 'react-router-dom';

export default function Characters({className, content}) {
    return (
        <motion.div className={className || 'content'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} id="characters">
            <motion.h1>Characters</motion.h1>
            <Outlet/>
        </motion.div>
    );
};