import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';
import voidAva from '../../img/avatarBlock.png';
import {mapStateToPropsHeaderType} from './HeaderContainer';
import { NavLink } from 'react-router-dom';

const {header, loginBlock, autorize} = s;


const Header = (props: mapStateToPropsHeaderType) => {
    const {login, isFetching, photo} = props;
    return (
        <header className={header}>
            <img src={logo}/>
            {isFetching && !photo ?
                <div className={autorize}>
                    <div className={loginBlock}>{login}</div>
                    {photo? <img src={photo} alt="miniAva"/>:<img src={voidAva} alt='voidAva'/>}
                </div> :
                <div className={loginBlock}>
                    <NavLink to={'/login'}>
                        <button>Login</button>
                    </NavLink>
                </div>}

        </header>);
}


export default Header;