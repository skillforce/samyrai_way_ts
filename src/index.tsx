import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import state from './Redux/state';
import {FriendsType} from './components/Navbar/SideBar/Friends/Friends';




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

reportWebVitals();
