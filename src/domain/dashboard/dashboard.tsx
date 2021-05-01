import React from 'react';

interface DashboardProps {
    children: React.ReactNode;
}

export const Dashboard = ({children}: DashboardProps) => {
    return (
        <>
            <section>{children}</section>
        </>
    );
};
