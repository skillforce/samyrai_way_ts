import React from 'react';
import s from './UsersClass.module.css';
import avatarBlock from '../../img/avatarBlock.png';
import {UsersDataType} from '../../Redux/UsersPage-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../API/API';


const {avatar, statusMSG, fullUsers, btnFoll, btnUnFoll, page, pageSelect, btnGroup} = s;
type UsersPagePropsType = {
    UsersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onFollow: (userId: number) => void
    onUnFollow: (userId: number) => void
    onPageChanged: (t: number) => void
    isFetching: boolean
    followInProgress: [] | number[]
    toggleIsFollowingProgress: (id: number, isFetching: boolean) => { type: 'TOGGLE-IS-FOLLOWING-PROGRESS'; id: number; isFetching: boolean; }
}

const UsersPage = (props: UsersPagePropsType) => {
    const {
        UsersData,
        onPageChanged,
        totalUsersCount,
        pageSize,
        currentPage,
        onFollow,
        onUnFollow,
        followInProgress,
        toggleIsFollowingProgress
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let allPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }
    return (<div>
            <div className={btnGroup}>
                {allPages.map(t => <span onClick={() => {
                    onPageChanged(t)
                }} className={currentPage === t ? pageSelect : page}>{t}</span>)}
            </div>
            {UsersData.map(t => (<div className={fullUsers}>
                <div className={avatar}>
                    <NavLink to={'/profile/' + t.id}>
                        <img
                            src={t.photos.small ? t.photos.small : avatarBlock}
                            alt="avaUser"/>
                    </NavLink>
                    <div>
                        <div>{t.name}</div>
                        <div className={statusMSG}>{t.status}</div>
                    </div>
                </div>
                <div>{t.followed &&
                <button disabled={followInProgress.some(id => id === t.id)} className={t.followed ? btnFoll : btnUnFoll}
                        onClick={() => {
                            toggleIsFollowingProgress(t.id,true)
                            usersAPI.unFollowUser(t.id).then((response) => {
                                if (response.resultCode === 0) {
                                    onUnFollow(t.id)
                                }
                                toggleIsFollowingProgress( t.id,false)
                            });
                        }}>Unfollow</button>}
                    {!t.followed &&
                    <button disabled={followInProgress.some(id => id === t.id)}
                            className={t.followed ? btnFoll : btnUnFoll} onClick={() => {
                        toggleIsFollowingProgress(t.id,true)
                        usersAPI.followUser(t.id).then((response) => {
                            if (response.resultCode === 0) {
                                onFollow(t.id)
                            }
                            toggleIsFollowingProgress(t.id,false)
                        });
                    }}>Follow</button>}
                </div>
            </div>))}
        </div>
    )
}


export default UsersPage;


