import {Dispatch} from 'redux';
import {getAuthMe} from './Auth-reducer';


const SET_INITIALIZED = 'SET_INITIALIZED';


export const isInitializedAC = (isInit: boolean) => ({
    type: 'SET_INITIALIZED' as const,
    isInit
});

type isInitialACType = ReturnType<typeof isInitializedAC>


type AuthACType = isInitialACType


export type InitialStateHeaderType = {
    initialized: boolean
};


let InitialState = {
    initialized: false
}


export const initializedApp = (idUser:number|null)=>(dispatch:Dispatch)=>{
    
    if(idUser===null){
        dispatch(isInitializedAC(false))
    }
    if(idUser){
        dispatch(getAuthMe(idUser.toString())).then(
            dispatch(isInitializedAC(true))
        )}else{
        dispatch(isInitializedAC(false))
    }



}









const AppReducer = (state: InitialStateHeaderType = InitialState, action: AuthACType): InitialStateHeaderType => {







    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized: action.isInit
            }
        default:
            return state;
    }
}

export default AppReducer