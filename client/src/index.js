import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

//Store code written here in comments is ready when it's time to go live with the store


ReactDOM.render(
    
        <HashRouter>
            <App />
        </HashRouter>
    
    , document.getElementById('root'));
