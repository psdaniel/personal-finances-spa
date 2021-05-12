import React from 'react';
import {State} from '../contexts/finances-context/finances-context';
import {useStyles} from './total-finances.styles';
interface TotalFinancesProps {
    data: State;
}

export const TotalFinances = ({data}: TotalFinancesProps) => {
    const classes = useStyles();
    return (
        <>
            <span className={classes.textStyle}>Total</span>
            <div className={classes.totalFinances}>
                <span className={classes.totalRevenue}>R$ 0,00</span>
                <span className={classes.totalDebt}>R$ 0,00</span>
            </div>
        </>
    );
};
