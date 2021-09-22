import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom'
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
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './Redux/ReduxStore';
import {initializedApp} from './Redux/App-reducer';
import Preloader from './components/Preloader/Preloader';


const App: React.FC = () => {
    const userId = useSelector<AppStateType, number | null>(state => state.Auth.id)
    const initialized = useSelector<AppStateType, boolean>(state => state.AppPage.initialized)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initializedApp(userId))
    }, [userId])



    if (!initialized) {
        return (<div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className={'app-wrapper-content'}>
                {!userId? <Login/> : <Preloader/>}
            </div>
        </div>)
    }


    if (!initialized && !userId) {
        return ( <div className="app-wrapper">
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
        )
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