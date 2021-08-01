import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import {Route} from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';

//
// type AppPropsType = {
//     store: any
// }


const App = () => {
    // const {store} = pr;
    // const {sideBar, navBarPage} = store.getState();
    //

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;