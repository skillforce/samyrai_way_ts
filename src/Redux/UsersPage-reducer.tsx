const FollowUsers = 'FOLLOW';
const UnfollowUsers = 'UNFOLLOW';
const SetUsers = 'SET-USERS'
const SetCurrentPage = 'SET-CURRENT-PAGE'
const setTotalUserCount = 'SET-TOTAL-USER-COUNT'

export const FollowActionCreator = (id: number) => ({type: FollowUsers, id: id});
export const UnfollowActionCreator = (id: number) => ({type: UnfollowUsers, id: id});
export const SetUsersActionCreator = (users: UsersDataType[]) => ({type: SetUsers, users: users});
export const SetCurrentPageActionCreator = (page: number) => ({type: SetCurrentPage, page: page});
export const SetTotalUserCountActionCreator = (totalUserCount: number) => ({type: setTotalUserCount, totalUsersCount: totalUserCount});


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
    totalUsersCount?:number
}

// type InitialStateUsersType = typeof InitialState;
type InitialStateUsersType = any;

let InitialState = {
    UsersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1
}

const UserPageReducer = (state: InitialStateUsersType = InitialState, action: UsersReducerActionType): InitialStateUsersType => {
    switch (action.type) {
        case FollowUsers :
            if (action.id) {
                return {
                    ...state,
                    UsersData: [...state.UsersData.map((t: { id: number; }) => t.id === action.id ? {
                        ...t,
                        followed: true
                    } : t)]
                }
            } else {
                return state;
            }
        case UnfollowUsers:
            if (action.id) {
                return {
                    ...state,
                    UsersData: [...state.UsersData.map((t: { id: number }) => t.id === action.id ? {
                        ...t,
                        followed: false
                    } : t)]
                }
            } else {
                return state;
            }
        case SetUsers :
            if (action.users) {
                return {...state, UsersData: [...action.users]}
            } else {
                return state
            }
        case SetCurrentPage:
            if (action.page) {
                return {...state, currentPage: action.page}
            } else {
                return state;
            }
        case setTotalUserCount:
            if (action.totalUsersCount) {
                return {...state, totalUsersCount: action.totalUsersCount}
            } else {
                return state;
            }

        default:
            return state;
    }
}


export default UserPageReducer;