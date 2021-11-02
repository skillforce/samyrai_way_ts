import './App.css';
import { HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React, {useEffect} from 'react';
import NavBarContainer from './components/Navbar/NavBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/login';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {AppStateType} from './Redux/ReduxStore';
import {getAuthMe} from './Redux/Auth-reducer';
import {withSuspense} from './HOC/withSuspense';
import Preloader from './components/Preloader/Preloader';
import Error404 from './components/common/Error404/Error404';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ContainerUsersClass = React.lazy(() => import('./components/Users/ContainerUsersClass'));

const App: React.FC = () => {
    const initialized = useSelector<AppStateType, boolean>(state => state.AppPage.initialized)
    const userId = useSelector<AppStateType, null | number>(state => state.Auth.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAuthMe(userId))
    }, [userId])


    if (!initialized) {
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
            <div className={'app-wrapper-content'}>
            <Switch>


                    <Route exact path={'/'} render={()=><Redirect to={'/profile'}/>}/>
                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/users'} render={withSuspense(ContainerUsersClass)}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                    <Route path={'*'}  render={() => <Error404/>}/>


            </Switch>
            </div>
        </div>
    );
}


export default App;


export const SamuraiJSApp:React.FC = () => {

    return (<HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}