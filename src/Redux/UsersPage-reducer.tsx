import {Dispatch} from 'redux';
import {usersAPI} from '../API/API';
import {AppStateType} from './ReduxStore';
import {ThunkAction} from 'redux-thunk';
import {on} from 'cluster';
import {updateObjectInArray} from '../utils/Object-helpers';
import {stat} from 'fs';

const FollowUsers = 'UsersPageReducer/FOLLOW' as const;
const UnfollowUsers = 'UsersPageReducer/UNFOLLOW' as const;
const SetUsers = 'UsersPageReducer/SET-USERS' as const;
const SetCurrentPage = 'UsersPageReducer/SET-CURRENT-PAGE' as const;
const setTotalUserCount = 'UsersPageReducer/SET-TOTAL-USER-COUNT' as const;
const ToggleIsFetching = 'UsersPageReducer/TOGGLE-IS-FETCHING' as const;
const ToggleIsFollowingProgress = 'UsersPageReducer/TOGGLE-IS-FOLLOWING-PROGRESS' as const;


export const onFollow = (id: number) => ({type: FollowUsers, id: id});
export const onUnFollow = (id: number) => ({type: UnfollowUsers, id: id});
export const setUsers = (users: UsersDataType[]) => ({type: SetUsers, users: users});
export const setCurrentPage = (page: number) => ({type: SetCurrentPage, page: page});
export const setTotalUsersCount = (totalUserCount: number) => ({
    type: setTotalUserCount,
    totalUsersCount: totalUserCount
});
export const toggleIsFetching = (isFetching: boolean) => ({
    type: ToggleIsFetching,
    isFetching: isFetching
});

export const toggleIsFollowingProgress = (id: number, isFetching: boolean) => ({
    type: ToggleIsFollowingProgress,
    id,
    isFetching,
});

export type onFollowACType = ReturnType<typeof onFollow>
export type onUnFollowACType = ReturnType<typeof onUnFollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>

export type UserPageActionType =
    onFollowACType
    | onUnFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType

export type GetStateType = () => AppStateType


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<UserPageActionType>, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(currentPage));
    }
}


const followUnFollowFlow = async (dispatch: Dispatch<UserPageActionType>, userId: number, apiMethod: any, actionCreator: typeof onFollow | typeof onUnFollow) => {
    dispatch(toggleIsFollowingProgress(userId, true));
    let response = await apiMethod(userId);
    if (response) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(userId, false));
}


export const UnFollowUsers = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, UserPageActionType> => {
    return async (dispatch, getState) => {
        followUnFollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), onUnFollow)
    }
}


export const followUsers = (userId: number) => {
    return (dispatch: Dispatch<UserPageActionType>, getState: GetStateType) => {
        followUnFollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), onFollow)
    }
}


export type UsersDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    followed: boolean
    status: string
}


let InitialState = {
    UsersData: [] as UsersDataType[] | [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as number[]
}


export type InitialStateUsersType = typeof InitialState

const UserPageReducer = (state: InitialStateUsersType = InitialState, action: UserPageActionType): InitialStateUsersType => {
    switch (action.type) {
        case FollowUsers :
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.id, true)
            }
        case UnfollowUsers:
            return {
                ...state,
                UsersData: updateObjectInArray(state.UsersData, action.id, false)
            }
        case SetUsers :
            if (action.users) {
                return {...state, UsersData: [...action.users]}
            } else {
                return state
            }
        case SetCurrentPage:
            return {...state, currentPage: action.page}

        case setTotalUserCount:
            return {...state, totalUsersCount: action.totalUsersCount}

        case ToggleIsFetching:
            return {...state, isFetching: action.isFetching}
        case ToggleIsFollowingProgress:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.id] :
                    state.followInProgress.filter((id: number) => id !== action.id)
            }
        default:
            return state;
    }
}


export default UserPageReducer;