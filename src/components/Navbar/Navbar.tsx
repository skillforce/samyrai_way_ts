import React from 'react';
import s from './Navbar.module.css';

const{nav,item,active}=s;

const NavBar = () =>{
    return(<nav className={nav}>
    <div className={item}>
        <a> Profile</a>
        </div>
        <div className={`${item} ${active}`}>
    <a>Messages</a>
    </div>
    <div className={item}>
        <a>News</a>
        </div>
        <div className={item}>
        <a>Music</a>
        </div>
        <div className={item}>
        <a>Settings</a>
        </div>
        </nav>
)
}


export default NavBar;