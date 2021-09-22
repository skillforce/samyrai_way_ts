import {AppStateType} from './ReduxStore';

export const getUsersSelector=(state:AppStateType)=>{
    return state.UsersPage.UsersData
}


export const getPageSize=(state:AppStateType)=>{
    return state.UsersPage.pageSize;
}

export const getTotalUserCount=(state:AppStateType)=>{
    return state.UsersPage.totalUsersCount;
}


export const getCurrentPage = (state:AppStateType)=>{
    return state.UsersPage.currentPage
}

export const getIsFetching = (state:AppStateType)=>{
    return state.UsersPage.isFetching
}

export const getFollowInProgress = (state:AppStateType)=>{
    return state.UsersPage.followInProgress
}



