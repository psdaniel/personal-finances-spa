/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dashboard} from '../dashboard';

export const ROUTES = [
    // eslint-disable-next-line react/display-name
    {path: '/', key: 'ROOT', exact: true, component: () => <h1>Log in</h1>},
    {path: '/dashboard', key: 'DASHBOARD', component: <Dashboard />}
];

export const RouteWithSubRoutes = (route: any) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component {...props} routes={route.routes} />}
        />
    );
};
