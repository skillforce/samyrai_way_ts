const FollowUsers = 'FOLLOW';
const UnfollowUsers = 'UNFOLLOW';
const SetUsers = 'SET-USERS'
const SetCurrentPage = 'SET-CURRENT-PAGE'
const setTotalUserCount = 'SET-TOTAL-USER-COUNT'
const ToggleIsFetching = 'TOGGLE-IS-FETCHING'

export const FollowActionCreator = (id: number) => ({type: FollowUsers, id: id});
export const UnfollowActionCreator = (id: number) => ({type: UnfollowUsers, id: id});
export const SetUsersActionCreator = (users: UsersDataType[]) => ({type: SetUsers, users: users});
export const SetCurrentPageActionCreator = (page: number) => ({type: SetCurrentPage, page: page});
export const SetTotalUserCountActionCreator = (totalUserCount: number) => ({
    type: setTotalUserCount,
    totalUsersCount: totalUserCount
});
export const ToggleIsFetchingActionCreator = (isFetching: boolean) => ({
    type: ToggleIsFetching,
    isFetching: isFetching
});


export type UsersDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    followed: boolean
    status: string
}

export type UsersReducerActionType = {
    type: string;
    id?: number
    users?: UsersDataType[]
    page?: number
    totalUsersCount?: number
    isFetching: boolean
}

// type InitialStateUsersType = typeof InitialState;
type InitialStateUsersType = any;

let InitialState = {
    UsersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const UserPageReducer = (state: InitialStateUsersType = InitialState, action: UsersReducerActionType): InitialStateUsersType => {
    switch (action.type) {
        case FollowUsers :
            return {
                ...state,
                UsersData: [...state.UsersData.map((t: { id: number; }) => t.id === action.id ? {
                    ...t,
                    followed: true
                } : t)]
            }
        case UnfollowUsers:
            return {
                ...state,
                UsersData: [...state.UsersData.map((t: { id: number }) => t.id === action.id ? {
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
        default:
            return state;
    }
}


export default UserPageReducer;