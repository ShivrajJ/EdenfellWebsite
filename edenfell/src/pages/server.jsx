import React from 'react';
import {Outlet} from 'react-router-dom';

const Server = () => {
    return (
        <div className='content'>
            <h1>Server</h1>
            <Outlet/>
        </div>
    );
};

export default Server;