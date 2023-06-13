import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export default function Map() {
    return(
        <motion.div>
            <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="280 0 800 800"
            width="642.20941"
            height="478.90234">
                <Link to="/world/locations/map" state={{location:"map1"}} replace={true}>
                    <motion.path className="land1" whileHover={{scale:1.2, fill:'#ff0000'}}
                    d="m 426.57657,344.37268 82,-51 131,1 73,26 104,-95 26,-13 6,30 32,-7 -13,-52 89,26 18,21 47.00003,59 -68.00003,90 -97,71 -83,78 -299,40 -94,-100 z"
                    stroke="#000000"
                    stroke-width="1"
                    fill="#ffffff" />
                </Link>
                <Link to="/world/locations/map" state={{location:"map2"}} replace={true}>
                    <motion.path className="land2" whileHover={{scale:1.2, fill:'#ff0000'}}
                    d="m 747.70093,117.54898 -66,-27.000004 -58,7 -23,30.000004 -34,-37.000004 -93,20.000004 -3,74 60,-6 49,43 58,40 13,-18 57,20 57,-87 z"
                    stroke="#000000"
                    stroke-width="1"
                    fill="#ffffff" />
                </Link>
            </motion.svg>
        </motion.div>
    );
}