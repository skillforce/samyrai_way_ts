import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';
import {mapStateToPropsHeaderType} from './HeaderContainer';
import {MiniAvaBlock} from './miniAvaBlock';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';


const {header} = s;


const Header = (props: mapStateToPropsHeaderType) => {

    const initialized = useSelector<AppStateType, boolean>(state => state.AppPage.initialized)
    const {login, isFetching, photo} = props;
    return (
        <header className={header}>
            <img src={logo} alt={'miniLogo'}/>
            {!initialized ? '' : <MiniAvaBlock fetching={isFetching} photo={photo} login={login}/>}
        </header>);
}


export default Header;