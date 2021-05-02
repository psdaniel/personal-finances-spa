import * as React from 'react';

const FinancesContext = React.createContext({});

interface FinancesDataProviderProps {
    children: any;
}

const useFinancesData = () => {
    const context = React.useContext(FinancesContext);
    if (!context) {
        throw new Error('useFinancesData must be used within a FinancesProvider');
    }
    return context;
};

const FinancesDataProvider: React.FC<React.PropsWithChildren<FinancesDataProviderProps>> = () => {
    const [data, setData] = React.useState({});
    const value = React.useMemo(() => [data, setData], [data]);
    return <FinancesContext.Provider value={value} />;
};

export {FinancesDataProvider, useFinancesData};
