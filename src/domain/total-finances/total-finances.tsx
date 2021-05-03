import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

export const TotalFinances = () => {
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
                <span style={{color: 'yellow'}}>Total Debt:</span>
                <span style={{color: 'yellow', marginBottom: 8}}>Total Revenue:</span>
            </div>
        </>
    );
};
