import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {Header} from './components/header/header';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CssBaseline />
            <Header />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
