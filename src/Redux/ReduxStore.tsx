import {applyMiddleware, combineReducers, createStore} from 'redux';
import ProfilePageReducer from './ProfilePage-reducer';
import DialogsPageReducer from './DialogsPage-reducer';
import NavBarPageReducer from './NavBarPage-reducer';
import SideBarReducer from './SideBar-reducer';
import UserPageReducer from './UsersPage-reducer';
import AuthReducer from './Auth-reducer';
import thunkMiddleWare from 'redux-thunk';


export type StoreType = typeof store;

export type AppStateType = ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    navBarPage: NavBarPageReducer,
    sideBar: SideBarReducer,
    UsersPage: UserPageReducer,
    Auth: AuthReducer
});


let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare));


export default store;



