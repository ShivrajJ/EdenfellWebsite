import React from 'react';
import logoImg from "./images/logo.png";

export default function Logo() {
    return (
        <div className="logo-div">
            <img src={logoImg} className='logo-img' alt=""/>
        </div>
    );
}