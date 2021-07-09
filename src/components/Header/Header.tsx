import React from 'react';
import s from './Header.module.css';
import logo from './logo.png';
const{header}=s;


const Header= ()=>{
    return(
        <header className={header}>
        <img src={logo} />
            </header>);
}


export default Header;