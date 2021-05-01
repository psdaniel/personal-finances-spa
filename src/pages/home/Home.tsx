import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard, DashboardContent} from '../../domain/dashboard/index';
import {ShowFinances} from '../../domain/show-finances/show-finances';

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
