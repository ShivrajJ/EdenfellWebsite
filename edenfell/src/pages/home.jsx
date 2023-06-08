import React from 'react';
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <motion.div className='content' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.h1>WELCOME TO EDENFELL</motion.h1>
        </motion.div>
    );
};

export default Home;