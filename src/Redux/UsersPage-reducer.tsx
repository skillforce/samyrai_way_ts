import {Dispatch} from 'redux';
import {usersAPI} from '../API/API';
import {AppStateType} from './ReduxStore';
import {ThunkAction} from 'redux-thunk';

const FollowUsers = 'FOLLOW' as const;
const UnfollowUsers = 'UNFOLLOW' as const;
const SetUsers = 'SET-USERS' as const;
const SetCurrentPage = 'SET-CURRENT-PAGE' as const;
const setTotalUserCount = 'SET-TOTAL-USER-COUNT' as const;
const ToggleIsFetching = 'TOGGLE-IS-FETCHING' as const;
const ToggleIsFollowingProgress = 'TOGGLE-IS-FOLLOWING-PROGRESS' as const;


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

type onFollowACType = ReturnType<typeof onFollow>
type onUnFollowACType = ReturnType<typeof onUnFollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>

type UserPageActionType =
    onFollowACType
    | onUnFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType

export type GetStateType = () => AppStateType


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UserPageActionType>, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(currentPage));
        });
    }
}
export const UnFollowUsers = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, UserPageActionType> => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFollowingProgress(userId, true));
        usersAPI.unFollowUser(userId).then((response) => {
            if (response.resultCode === 0) {
                dispatch(onUnFollow(userId));
            }
            dispatch(toggleIsFollowingProgress(userId, false));
        });
    }
}


export const followUsers = (userId: number) => {
    return (dispatch: Dispatch<UserPageActionType>, getState: GetStateType) => {
        dispatch(toggleIsFollowingProgress(userId, true));
        usersAPI.followUser(userId).then((response) => {
            if (response) {
                dispatch(onFollow(userId));
            }
            dispatch(toggleIsFollowingProgress(userId, false));
        });
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


type InitialStateUsersType = typeof InitialState

const UserPageReducer = (state: InitialStateUsersType = InitialState, action: UserPageActionType): InitialStateUsersType => {
    switch (action.type) {
        case FollowUsers :
            return {
                ...state,
                UsersData: [...state.UsersData.map((t) => t.id === action.id ? {
                    ...t,
                    followed: true
                } : t)]
            }
        case UnfollowUsers:
            return {
                ...state,
                UsersData: [...state.UsersData.map((t) => t.id === action.id ? {
                    ...t,
                    followed: false
                } : t)]
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