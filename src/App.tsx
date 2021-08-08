import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';
import ContainerUsers from './components/Users/ContainerUsers';


const App = () => {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBarContainer/>
            <Switch>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/users'} render={() => <ContainerUsers/>} />
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </Switch>
        </div>
    );
}


export default App;