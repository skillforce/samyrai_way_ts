import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {StateType} from './Redux/state';

const {dispatch} = store

let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={dispatch.bind(store)}
                     state={state}/>
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);
