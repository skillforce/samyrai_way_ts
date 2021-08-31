import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../Redux/ReduxStore';


type MapStateToPropsForRedirectType = {
    isAuth:boolean
}


const mapStateToPropsForRedirect = (state: AppStateType):MapStateToPropsForRedirectType => {

    return {
        isAuth: state.Auth.isFetching
    }
}

export function withAuthRedirect<T>(Component:ComponentType<T>){
     const RedirectComponent = (props:MapStateToPropsForRedirectType)=>{
         let{isAuth,...restProps}=props;
         return isAuth ? <Component {...restProps as T}/>: <Redirect to={'/login'}/>
        }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)

}