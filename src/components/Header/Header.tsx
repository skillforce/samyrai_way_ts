import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from './logo.png';
import {mapStateToPropsHeaderType} from './HeaderContainer';

const {header, loginBlock} = s;


const Header = (props: mapStateToPropsHeaderType) => {
    const {login, isFetching,id,photo} = props;
    debugger
    return (
        <header className={header}>
            <img src={logo}/>
            {isFetching && photo===null ?
                <div className={loginBlock}>{login}+{photo}</div> :
                <div className={loginBlock}>
                    <NavLink to={'/login'}>
                        <button>Login</button>
                    </NavLink>
                </div>}

        </header>);
}


export default Header;