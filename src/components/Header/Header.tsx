import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from './logo.png';
import {mapStateToPropsHeaderType} from './HeaderContainer';

const {header, loginBlock, autorize} = s;


const Header = (props: mapStateToPropsHeaderType) => {
    const {login, isFetching, photo} = props;
    return (
        <header className={header}>
            <img src={logo}/>
            {isFetching && !photo ?
                <div className={autorize}>
                    <div className={loginBlock}>{login}</div>
                    {/*<img src={photo} alt="miniAva"/>*/}
                </div> :
                <div className={loginBlock}>
                    <NavLink to={'/login'}>
                        <button>Login</button>
                    </NavLink>
                </div>}

        </header>);
}


export default Header;