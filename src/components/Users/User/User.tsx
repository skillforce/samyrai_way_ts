import React from 'react';
import s from './User.module.css';
import avatarBlock from '../../../img/avatarBlock.png';
import {NavLink} from 'react-router-dom';
import {UsersDataType} from '../../../Redux/UsersPage-reducer';


const {avatar, statusMSG, fullUsers, btnFoll, btnUnFoll} = s;
type UserPropsType = {
    followInProgress: [] | number[]
    unFollowUsers: (userId: number) => void
    followUsers: (userId: number) => void
    user: UsersDataType

}

export const User = (props: UserPropsType) => {
    const {
        followInProgress,
        followUsers,
        unFollowUsers,
        user
    } = props;


    return (<div className={fullUsers}>
            <div className={avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small ? user.photos.small : avatarBlock}
                        alt="avaUser"/>
                </NavLink>
                <div>
                    <div>{user.name}</div>
                    <div className={statusMSG}>{user.status}</div>
                </div>
            </div>
            <div>{user.followed &&
            <button disabled={followInProgress.some(id => id === user.id)}
                    className={user.followed ? btnFoll : btnUnFoll}
                    onClick={() => {
                        unFollowUsers(user.id)
                    }}>Unfollow</button>}
                {!user.followed &&
                <button disabled={followInProgress.some(id => id === user.id)}
                        className={user.followed ? btnFoll : btnUnFoll} onClick={() => {
                    followUsers(user.id)
                }}>Follow</button>}
            </div>
        </div>
    )
}





