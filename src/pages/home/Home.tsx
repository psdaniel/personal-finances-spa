import React from 'react';
import {Header} from '../../components/header/header';
import {Dashboard, DashboardContent} from '../../domain/dashboard/index';
import {FinancesDataProvider} from '../../domain/contexts/finances-context.ts/finances-context';

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
