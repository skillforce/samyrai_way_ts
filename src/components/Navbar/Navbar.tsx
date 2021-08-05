import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import {SideBarType} from '../../Redux/SideBar-reducer';
import {NavBarType} from '../../Redux/NavBarPage-reducer';


export type NavBarPropsType = {
    navBarLink: NavBarType[]
    sideBar: SideBarType

}


const {nav, item, setting, active} = s;

const NavBar = (pr: NavBarPropsType) => {

    const {navBarLink, sideBar} = pr;

    const navBarLinks = navBarLink.map((t: NavBarType) => (<div key={t.id} className={item}>
        <NavLink to={t.link} activeClassName={active}>{t.name}</NavLink>
    </div>));


    return (<nav className={nav}>
            {navBarLinks}
            <div className={setting}>
                <NavLink to={'/settings'} activeClassName={active}>Настройки</NavLink>
            </div>
            <div>
                <SideBar sideBar={sideBar}/>
            </div>
        </nav>
    )
}


export default NavBar;