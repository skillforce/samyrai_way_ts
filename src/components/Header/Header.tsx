import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from './logo.png';
import {InitialStateHeaderType} from '../../Redux/Auth-reducer';
import {debuglog} from 'util';
import {mapStateToPropsHeaderType} from './HeaderContainer';

const {header, loginBlock} = s;


const Header = (props: mapStateToPropsHeaderType) => {
    const {login, isFetching} = props;
    debugger
    return (
        <header className={header}>
            <img src={logo}/>
            {isFetching ?
                <div className={loginBlock}>{login}</div> :
                <div className={loginBlock}>
                    <NavLink to={'/login'}>
                        <button>Login</button>
                    </NavLink>
                </div>}

        </header>);
}


export default Header;