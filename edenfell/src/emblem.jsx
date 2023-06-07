import React from 'react';
import emblemBig from "./images/animated.png";
import emblemSmall from "./images/EmblemSmall.png";
import {motion} from 'framer-motion';

export default function Emblem({logoChange}) {
    return (
        <div className="emblem-div">
            { !logoChange && <motion.img animate={{opacity:[0, 1]}} transition="easeIn" className='animated-emblem' alt="Emblem" src={emblemBig}/>}
            { logoChange && <motion.img animate={{opacity:[0, 1]}} transition="easeIn" className='emblem-img' alt="Emblem" src={emblemSmall}/>}
        </div>
    );
}