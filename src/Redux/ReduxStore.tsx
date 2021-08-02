import {combineReducers, createStore} from 'redux';
import ProfilePageReducer from './ProfilePage-reducer';
import DialogsPageReducer from './DialogsPage-reducer';
import NavBarPageReducer from './NavBarPage-reducer';
import SideBarReducer from './SideBar-reducer';

export type StoreType= typeof store;

export type StateType = ReturnType<typeof reducers>


let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    navBarPage: NavBarPageReducer,
    sideBar: SideBarReducer
});


let store = createStore(reducers);


export default store;