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
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 500,
            height: 100
        },
        textStyle: {
            fontWeight: 'bold',
            color: MainTheme.colors.mainYellow,
            fontSize: '2rem'
        }
    });

    const classes = useStyles();
    return (
        <>
            <span className={classes.textStyle}>Total Finances</span>
            <div className={classes.totalFinances}>
                <span style={{color: 'yellow'}}>Total Debt:{data.debt}</span>
                <span style={{color: 'yellow', marginBottom: 8}}>
                    Total Revenue: {data.revenue}
                </span>
            </div>
        </>
    );
};
