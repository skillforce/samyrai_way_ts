import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import {FriendsPropsType, FriendsType} from './SideBar/Friends/Friends';


export type NavBarType = {
    id: number
    link: string
    class: string
    name: string
}

export type NavBarPageType = {
    navBarLink: NavBarType[]
}

export type NavBarPropsType = {
    state: NavBarPageType
    sideBar:FriendsPropsType
}


const {nav, item, setting, active} = s;

const NavBar = (pr: NavBarPropsType) => {

    const {state,sideBar} = pr;

    const {navBarLink} = state;






    const navBarLinks = navBarLink.map((t: NavBarType) => (<div key={t.id} className={item}>
        <NavLink to={t.link} activeClassName={active}>{t.name}</NavLink>
    </div>))



    return (
        <nav className={nav}>
            {navBarLinks}
            <div className={setting}>
                <NavLink to={'/settings'} activeClassName={active}>Настройки</NavLink>
            </div>
            <div>
              <SideBar sideBar={sideBar} />
            </div>
        </nav>
    )
}


export default NavBar;