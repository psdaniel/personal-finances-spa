import * as React from 'react';

type Action = {type: 'ADD_DEBT'} | {type: 'ADD_REVENUE'};
type Dispatch = (action: Action) => void;
type State = {debt: number; revenue: number};
type FinancesDataProviderProps = {children: React.ReactNode};

const FinancesContext = React.createContext<{state: State; dispatch: Dispatch} | undefined>(
    undefined
);

const initialState = {
    debt: 0,
    revenue: 0
};

function financesReducer(state: State, action: Action) {
    switch (action.type) {
        case 'ADD_DEBT': {
            return {...state, debt: state.debt + 1};
        }
        case 'ADD_REVENUE': {
            return {...state, revenue: state.revenue + 1};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export const FinancesDataProvider = ({children}: FinancesDataProviderProps) => {
    const [state, dispatch] = React.useReducer(financesReducer, initialState);
    const value = {state, dispatch};
    return <FinancesContext.Provider value={value}>{children}</FinancesContext.Provider>;
};

export const useFinancesData = () => {
    const context = React.useContext(FinancesContext);
    if (context === undefined) {
        throw new Error('useFinancesData must be used within a FinancesProvider');
    }
    return context;
};
