import {applyMiddleware, combineReducers, createStore} from 'redux';
import ProfilePageReducer from './ProfilePage-reducer';
import DialogsPageReducer from './DialogsPage-reducer';
import NavBarPageReducer from './NavBarPage-reducer';
import SideBarReducer from './SideBar-reducer';
import UserPageReducer from './UsersPage-reducer';
import AuthReducer from './Auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import loginPageReducer from './loginPage-reducer';
import AppReducer from './App-reducer';


export type StoreType = typeof store;

export type AppStateType = ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    navBarPage: NavBarPageReducer,
    sideBar: SideBarReducer,
    UsersPage: UserPageReducer,
    Auth: AuthReducer,
    form: formReducer,
    loginPage:loginPageReducer,
    AppPage:AppReducer
});


let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

declare global {
    interface Window {
        store: StoreType;
    }
}


window.store = store;
export default store;



