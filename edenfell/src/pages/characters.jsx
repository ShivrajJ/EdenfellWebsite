import React from 'react';
import {motion} from 'framer-motion';
import {Outlet} from 'react-router-dom';

const Characters = () => {
    return (
        <motion.div className='content' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.h1>Characters</motion.h1>
            <Outlet/>
        </motion.div>
    );
};

export default Characters;