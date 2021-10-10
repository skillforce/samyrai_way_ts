import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React, {useEffect} from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';
import ContainerUsersClass from './components/Users/ContainerUsersClass';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/login';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {AppStateType} from './Redux/ReduxStore';
import Preloader from './components/Preloader/Preloader';
import {getAuthMe} from './Redux/Auth-reducer';


const App: React.FC = () => {
    const initialized = useSelector<AppStateType, boolean>(state => state.AppPage.initialized)
    const userId = useSelector<AppStateType, null|number>(state => state.Auth.id)
    const dispatch = useDispatch();


    useEffect(() => {
       dispatch(getAuthMe(userId))
    }, [userId])


    if (!initialized ) {
        return (<div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className={'app-wrapper-content'}>
                 <Preloader/>
            </div>
        </div>)
    }


    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <Switch>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <ContainerUsersClass/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => userId ?
                        <Redirect to={'/profile/:userId?'}/> : <Login/>}/>
                </div>
            </Switch>
        </div>
    );
}


export default App;


export const SamuraiJSApp: React.FC = () => {

    return (<HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}