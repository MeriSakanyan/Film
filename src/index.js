import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n/i18n';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { BrowserRouter } from 'react-router-dom' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
);

