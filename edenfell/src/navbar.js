import {React, useState} from 'react';
import Menu from './menu';
import Logo from './logo';
import Emblem from './emblem';
import Dropdown from './dropdown';

export default function Navbar() {
    const[menuIsExpanded, setMenuIsExpanded] = useState(false);
    function toggleMenu() {
        setMenuIsExpanded(!menuIsExpanded);
    }
    return(
        <nav>
            <Logo />
            <Emblem />
            <Dropdown expandMenu={toggleMenu}/>
            <Menu expanded={menuIsExpanded}/>
        </nav>
    );
}