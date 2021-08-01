import React from 'react';
import {StoreType} from './Redux/store';


const StoreContext: any = React.createContext(null);

type ProviderPropsType = {
    store: any
    children: any
}


export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}


export default StoreContext;