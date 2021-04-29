import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard} from '../../domain/dashboard/dashboard';

export const Home = () => {
    return (
        <>
            <Header />
            <Dashboard />
        </>
    );
};
