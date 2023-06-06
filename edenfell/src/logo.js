import React from 'react';

export default function Logo() {
    return (
        <div className="logo-div">
            <img src={require("./images/logo.png")} className='logo-img' alt=""/>
        </div>
    );
}