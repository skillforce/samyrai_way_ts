import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBar, {SideBarPropsType} from './SideBar/SideBar';
import {FriendsPropsType, FriendsType} from './SideBar/Friends/Friends';
import StoreContext from '../../StoreContext';


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
    sideBar: FriendsPropsType
}


const {nav, item, setting, active} = s;

const NavBar = () => {

    // const {state,sideBar} = pr;


    return (
        <StoreContext.Consumer>
            {(store: any) => {
                let state = store.getState();
                let navBarLink = state.navBarPage.navBarLink;
                let sideBar: FriendsPropsType = state.sideBar;

                const navBarLinks = navBarLink.map((t: NavBarType) => (<div key={t.id} className={item}>
                    <NavLink to={t.link} activeClassName={active}>{t.name}</NavLink>
                </div>));

                return <nav className={nav}>
                    {navBarLinks}
                    <div className={setting}>
                        <NavLink to={'/settings'} activeClassName={active}>Настройки</NavLink>
                    </div>
                    <div>
                        <SideBar sideBar={sideBar}/>
                    </div>
                </nav>
            }
            }
        </StoreContext.Consumer>
    )
}


export default NavBar;