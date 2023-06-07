import React from 'react';
import {Outlet} from 'react-router-dom';

const World = () => {
    return (
        <div className='content'>
            <h1>World</h1>
            <Outlet/>
        </div>
    );
};

export default World;