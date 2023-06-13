import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function MapPage({className, content}) {
    let {state} = useLocation();
    const[Land, setLand] = useState();
    useEffect(() => {
        let loadMap = async() => {
            import(`../img/${state.location}.jsx`).then((res) => {
                setLand(res.default);
            });
        }
        loadMap();
    }, [state])
    if(!Land) return(<h1>Loading...</h1>);
    return(
        <motion.div className={className}>
            {Land}
            {/* <Land /> */}
        </motion.div>
    );
}