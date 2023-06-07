import React from 'react';

export default function Search({expanded}) {
    return(expanded &&
        <input type="text" placeholder="Search" autoComplete="off" name="searchfield" className='search-input'/>
    );
}