import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard, DashboardContent} from '../../domain/dashboard/index';

export const Home = () => {
    return (
        <>
            <Header />
            <Dashboard>
                <DashboardContent />
            </Dashboard>
        </>
    );
};
