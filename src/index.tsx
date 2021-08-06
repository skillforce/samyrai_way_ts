import store from './Redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {StateType} from './Redux/store';
import {Provider} from 'react-redux';



let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
