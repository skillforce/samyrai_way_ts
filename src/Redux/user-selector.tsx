import {AppStateType} from './ReduxStore';
import {UsersDataType} from './UsersPage-reducer';

export const getUsersSelector=(state:AppStateType):UsersDataType[]=>{
    return state.UsersPage.UsersData
}


export const getPageSize=(state:AppStateType):number=>{
    return state.UsersPage.pageSize;
}

export const getTotalUserCount=(state:AppStateType):number=>{
    return state.UsersPage.totalUsersCount;
}


export const getCurrentPage = (state:AppStateType):number=>{
    return state.UsersPage.currentPage
}

export const getIsFetching = (state:AppStateType):boolean=>{
    return state.UsersPage.isFetching
}

export const getFollowInProgress = (state:AppStateType):number[]=>{
    return state.UsersPage.followInProgress
}



