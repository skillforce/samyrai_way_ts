import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';

import {mapStateToPropsHeaderType} from './HeaderContainer';

import {MiniAvaBlock} from './miniAvaBlock';

const {header} = s;




const Header = (props: mapStateToPropsHeaderType) => {
    const {login, isFetching, photo} = props;
    return (
        <header className={header}>
            <img src={logo} alt={'miniLogo'}/>
            <MiniAvaBlock fetching={isFetching} photo={photo} login={login}/>

        </header>);
}


export default Header;