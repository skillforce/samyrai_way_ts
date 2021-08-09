import axios from 'axios';
import React, {useEffect} from 'react';
import {UsersDataType} from '../../Redux/UsersPage-reducer';
import avatarBlock from '../../img/avatarBlock.png';

import s from './Users.module.css';


const {avatar, statusMSG, fullUsers, btnFoll, btnUnFoll} = s;


type UsersPropsType = {
    UsersData: UsersDataType[]
    pageSize:number
    onFollow: (userId: number) => void
    onUnFollow: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
}


export const Users = (props: UsersPropsType) => {
    const {UsersData, onFollow, onUnFollow, setUsers} = props;

    let getUsers = () => {
        if (UsersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
                setUsers(response.data.items)
            });
        }
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (<div>
        {UsersData.map(t => (<div className={fullUsers}>
            <div className={avatar}>
                <img
                    src={t.photos.small ? t.photos.small : avatarBlock}
                    alt="avaUser"/>
                <div>
                    <div>{t.name}</div>
                    <div className={statusMSG}>{t.status}</div>
                </div>
            </div>
            <div>
                {t.followed && <button className={t.followed ? btnFoll : btnUnFoll} onClick={() => {
                    onUnFollow(t.id)
                }}>Follow</button>}
                {!t.followed && <button className={t.followed ? btnFoll : btnUnFoll} onClick={() => {
                    onFollow(t.id)
                }}>Unfollow</button>}

            </div>
        </div>))}
    </div>)
}