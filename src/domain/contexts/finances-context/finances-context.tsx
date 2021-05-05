import * as React from 'react';

type Action = {type: 'ADD_DEBT'; payload: State} | {type: 'ADD_REVENUE'; payload: State};
type Dispatch = (action: Action) => void;
export type State = {id: number; debt: string; revenue: number; debtor: string; credor: string};
//type State = {data: Array<StateType>};
type FinancesDataProviderProps = {children: React.ReactNode};

const FinancesContext = React.createContext<{state: State; dispatch: Dispatch} | undefined>(
    undefined
);

const initialState = {
    id: 0,
    debt: '',
    revenue: 0,
    debtor: '',
    credor: ''
};

function financesReducer(state: State, action: Action) {
    switch (action.type) {
        case 'ADD_DEBT': {
            return {
                ...state,
                debt: action.payload.debt,
                debtor: action.payload.debtor,
                id: state.id + 1
            };
        }
        case 'ADD_REVENUE': {
            return {...state, revenue: state.revenue + 1};
        }
        default: {
            throw new Error(`Unhandled action type`);
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
