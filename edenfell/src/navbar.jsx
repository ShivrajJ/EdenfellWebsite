import {React, useState} from 'react';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import Menu from './menu';
import Logo from './logo';
import Emblem from './emblem';
import Dropdown from './dropdown';

export default function Navbar() {
    const[menuIsExpanded, setMenuIsExpanded] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    function toggleMenu() {
        setMenuIsExpanded(!menuIsExpanded);
    }
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 300 && scrollY?.prev <= 300) {
            setScrolled(true);
        } else if(latest <= 300 && scrollY?.prev > 300) {
            setScrolled(false);
        }
      })
    return(
        <nav className='navbar'>
            <motion.div layout className="nav-div" initial={{width:'0vw', minWidth:'0vw'}} animate={{width: scrolled ? '10vw' : '15vw', minWidth: scrolled ? '10vw' : '15vw'}}>
                <Logo layout />
                <Emblem layout logoChange={scrolled}/>
                <Dropdown layout expandMenu={toggleMenu}/>
            </motion.div>
            <Menu expanded={menuIsExpanded}/>
        </nav>
    );
}