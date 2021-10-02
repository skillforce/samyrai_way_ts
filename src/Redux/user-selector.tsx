import {AppStateType} from './ReduxStore';
import {UsersDataType} from './UsersPage-reducer';
import {createSelector} from 'reselect';


type getUsersReturnType = (state: AppStateType) => UsersDataType[]



///////////// reselect lib
export const getUsersSelector: getUsersReturnType = (state) => {
    return state.UsersPage.UsersData
}

export const getUsersSuper = createSelector<AppStateType, UsersDataType[] | [], UsersDataType[] | []>
(getUsersSelector, (users: UsersDataType[]) => {
    return users.filter(t => true)
})
/////////////


export const getPageSize = (state: AppStateType): number => {
    return state.UsersPage.pageSize;
}

export const getTotalUserCount = (state: AppStateType): number => {
    return state.UsersPage.totalUsersCount;
}


export const getCurrentPage = (state: AppStateType): number => {
    return state.UsersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.UsersPage.isFetching
}

export const getFollowInProgress = (state: AppStateType): number[] => {
    return state.UsersPage.followInProgress
}



