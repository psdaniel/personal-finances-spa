import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard} from '../../domain/dashboard/dashboard';
import {ShowFinances} from '../../domain/show-finances/show-finances';

export const Home = () => {
    return (
        <>
            <Header />
            <Dashboard />
        </>
    );
};
