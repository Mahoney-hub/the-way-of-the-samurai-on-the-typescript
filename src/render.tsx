import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state';

export let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}





