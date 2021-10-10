


const SET_INITIALIZED = 'App-reducer/SET_INITIALIZED';


export const isInitializedAC = (isInit: boolean) => ({
    type: 'App-reducer/SET_INITIALIZED' as const,
    isInit
});


export type isInitialACType = ReturnType<typeof isInitializedAC>


export type AppACType = isInitialACType


export type InitialStateHeaderType = {
    initialized: boolean
    isInitialized:boolean
};


let InitialState = {
    initialized: false,
    isInitialized:false
}




const AppReducer = (state: InitialStateHeaderType = InitialState, action: AppACType): InitialStateHeaderType => {


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