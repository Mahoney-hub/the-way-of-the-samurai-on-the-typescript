import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state, {addPost} from './redux/state';
import {rerenderEntireTree} from './render';


rerenderEntireTree(state)




