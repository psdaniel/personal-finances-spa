import React from 'react';
import {Home} from './pages/home/Home';
import {Login} from './pages/login/Login';
import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
