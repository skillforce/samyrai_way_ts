import React from 'react';
import {UsersDataType} from '../../Redux/UsersPage-reducer';
import Paginator from '../common/Paginator/Paginator';
import {User} from './User/User';


type UsersPagePropsType = {
    UsersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (t: number) => void
    isFetching: boolean
    followInProgress: [] | number[]
    unFollowUsers: (userId: number) => void
    followUsers: (userId: number) => void
}

export const UsersPage = (props: UsersPagePropsType) => {
    const {
        UsersData,
        onPageChanged,
        totalUsersCount,
        pageSize,
        currentPage,
        followInProgress,
        followUsers,
        unFollowUsers
    } = props;


    return (<div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {UsersData.map(t => <User key={t.id} followInProgress={followInProgress}
                                      unFollowUsers={unFollowUsers}
                                      followUsers={followUsers} user={t}/>)}
        </div>
    )
}


export default UsersPage;


