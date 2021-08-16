import {mapStateToPropsHeaderType} from '../components/Header/HeaderContainer';

const Set_User_Data = 'SET_USERS_DATA';


export const setUsersHeader = (user: InitialStateHeaderType) => ({type: 'SET_USERS_DATA' as const, user: user});

export type AllActionType = 'SET_USERS_DATA'


export type AuthActionType = {
    type: AllActionType,
    user?: InitialStateHeaderType
}


export type InitialStateHeaderType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching?: boolean
};


let InitialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false
}

const AuthReducer = (state: InitialStateHeaderType = InitialState, action: AuthActionType): InitialStateHeaderType => {
    switch (action.type) {
        case Set_User_Data :
            if (action.user) {
                return {
                    ...state,
                    ...action.user,
                    isFetching: true
                }
            } else {
                return state
            }
        default:
            return state;
    }
}


export default AuthReducer;