import React from 'react';
import {motion} from 'framer-motion';

export default function Emblem({logoChange}) {
    return (
        <div className="emblem-div">
            { !logoChange && <motion.img animate={{opacity:[0, 1]}} transition="easeIn" className='emblem-img' alt="Emblem" src="./src/images/EmblemBig.png"/>}
            { logoChange && <motion.img animate={{opacity:[0, 1]}} transition="easeIn" className='emblem-img' alt="Emblem" src="./src/images/EmblemSmall.png"/>}
        </div>
    );
}