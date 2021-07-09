import Header from './components/Header/Header';
import NavBar, {NavBarPropsType, NavBarType} from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import {Route} from 'react-router-dom'
import Dialogs, {DialogsPropsType} from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import {StateType} from './Redux/state';
import {FriendsType} from './components/Navbar/SideBar/Friends/Friends';

type AppPropsType = {
    state: StateType

}


const App = (pr: AppPropsType) => {

    const {dialogsPage, profilePage, navBarPage,sideBar} = pr.state;



    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={navBarPage} sideBar={sideBar} />
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile state={profilePage}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={dialogsPage}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;