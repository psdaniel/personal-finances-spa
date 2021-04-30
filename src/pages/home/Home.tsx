import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard} from '../../domain/dashboard/dashboard';
import {ShowDebts} from '../../domain/show-debts/show-debts';

export const Home = () => {
    return (
        <>
            <Header />
            <Dashboard />
        </>
    );
};
