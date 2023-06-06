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
        <nav className='navbar'>
            <div className="nav-div">
                <Logo />
                <Emblem />
                <Dropdown expandMenu={toggleMenu}/>
            </div>
            <Menu expanded={menuIsExpanded}/>
        </nav>
    );
}