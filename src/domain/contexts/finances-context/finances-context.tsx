import * as React from 'react';

const FinancesContext = React.createContext({});

interface FinancesDataProviderProps {
    children: any;
}

export const useFinancesData = () => {
    const context = React.useContext(FinancesContext);
    if (!context) {
        throw new Error('useFinancesData must be used within a FinancesProvider');
    }
    return context;
};

export const FinancesDataProvider: React.FC<React.PropsWithChildren<FinancesDataProviderProps>> = ({
    children
}) => {
    const [data, setData] = React.useState({});
    const value = React.useMemo(() => [data, setData], [data]);
    return <FinancesContext.Provider value={value}>{children}</FinancesContext.Provider>;
};
