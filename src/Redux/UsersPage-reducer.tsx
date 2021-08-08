const FollowUsers = 'FOLLOW';
const UnfollowUsers = 'UNFOLLOW';
const SetUsers = 'SET-USERS'

export const FollowActionCreator = (id: number) => ({type: FollowUsers, id: id});
export const UnfollowActionCreator = (id: number) => ({type: UnfollowUsers, id: id});
export const SetUsersActionCreator = (users: UsersDataType[]) => ({type: SetUsers, users: users});




export type UsersDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    followed: boolean
    status:string
}

export type UsersReducerActionType = {
    type: string;
    id?: number
    users?: UsersDataType[]
}

// type InitialStateUsersType = typeof InitialState;
type InitialStateUsersType = any;

let InitialState = {
    UsersData: []
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
                return {...state, UsersData: [...state.UsersData, ...action.users]}
            } else {
                return state
            }

        default:
            return state;
    }
}


export default UserPageReducer;