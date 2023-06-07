import React from 'react';
import {Outlet} from 'react-router-dom';

const Characters = () => {
    return (
        <div className='content'>
            <h1>Characters</h1>
            <Outlet/>
        </div>
    );
};

export default Characters;