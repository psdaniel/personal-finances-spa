import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {State} from '../contexts/finances-context/finances-context';

interface TotalFinancesProps {
    data: State;
}

export const TotalFinances = ({data}: TotalFinancesProps) => {
    const useStyles = makeStyles({
        totalFinances: {
            display: 'flex',
            justifyContent: 'center',
            width: 500,
            height: '4rem'
        },
        textStyle: {
            fontWeight: 'bold',
            color: MainTheme.colors.mainYellow,
            fontSize: '2rem'
        },
        totalRevenue: {
            fontFamily: MainTheme.fonts.main,
            fontWeight: 'bold',
            fontSize: '2rem',
            color: MainTheme.colors['green-2'],
            marginRight: '2.5rem'
        },
        totalDebt: {
            fontFamily: MainTheme.fonts.main,
            fontWeight: 'bold',
            fontSize: '2rem',
            color: MainTheme.colors['red-2'],
            marginLeft: '2.5rem'
        }
    });

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
