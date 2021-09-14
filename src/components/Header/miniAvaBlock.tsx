import voidAva from '../../img/avatarBlock.png';
import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import s from './miniAvaBlock.module.css';
import {useDispatch} from 'react-redux';
import {logOutThunk} from '../../Redux/loginPage-reducer';


const {loginBlock, autorize} = s

export const MiniAvaBlock = (props: { fetching: boolean | undefined, photo: string | undefined, login: string | null }) => {
    const [logOunBtn, setLogOutBtn] = useState<boolean>(false)
    const isLogOut = () => {
        setLogOutBtn(!logOunBtn);
    }


    const dispatch = useDispatch();

    const logOut=()=>{
        dispatch(logOutThunk())
    }




    return <>
        {props.fetching && !props.photo ?
            <div onClick={isLogOut} className={autorize}>
                <div className={loginBlock}>{props.login}</div>
                {props.photo ? <img src={props.photo} alt="miniAva"/> : <img src={voidAva} alt="voidAva"/>}
                {logOunBtn ? <div className={loginBlock}>
                    <button onClick={logOut}>Log Out</button>
                </div> : ''}
            </div> :
            <div className={loginBlock}>
                <NavLink to={'/login'}>
                    <button>Login</button>
                </NavLink>
            </div>}
    </>;
}