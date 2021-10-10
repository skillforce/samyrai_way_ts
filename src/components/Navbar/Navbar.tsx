import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import {NavBarType} from '../../Redux/NavBarPage-reducer';
import {mapStateToPropsReturnType} from './NavBarContainer';





const {nav, item, setting, active} = s;

const NavBar = (pr: mapStateToPropsReturnType) => {



    const {navBarLink, sideBar,isFetch} = pr;

    const navBarLinks = navBarLink.map((t: NavBarType) => (<div key={t.id} className={item}>
        <NavLink to={t.link} activeClassName={active}>{t.name}</NavLink>
    </div>));




    return (
        <nav className={nav}>
            {navBarLinks}
            <div className={setting}>
               <NavLink to={'/settings'} activeClassName={active}>Настройки</NavLink>
            </div>
        <div>
                 <SideBar isFetch={isFetch} sideBar={sideBar}/>
        </div>
        </nav>
    )
}


export default NavBar;