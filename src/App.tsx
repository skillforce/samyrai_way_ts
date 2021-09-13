import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';
import ContainerUsersClass from './components/Users/ContainerUsersClass';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/login';
import {useSelector} from 'react-redux';
import {AppStateType} from './Redux/ReduxStore';


const App: React.FC = () => {
    const isFetching = useSelector<AppStateType, boolean>(state => state.Auth.isFetching)

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
                    <Route path={'/login'} render={() => isFetching ?
                        <Redirect to={'/profile/:userId?'}/>:<Login/>}/>
                </div>
            </Switch>
        </div>
    );
}


export default App;