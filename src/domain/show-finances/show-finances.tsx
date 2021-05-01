import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {MainTheme} from '../../themes/main';
import {GetValues} from '../get-values/get-values';

export const ShowFinances = () => {
    const useStyles = makeStyles({
        showFinancesContainer: {
            display: 'flex',
            backgroundColor: MainTheme.colors['black-2'],
            height: 700,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        financesFeed: {
            width: 500,
            height: 500,
            backgroundColor: '#fefefe'
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.showFinancesContainer}>
                <div className={classes.financesFeed}>
                    <div>DebtsFeed</div>
                </div>
                <div>
                    <GetValues />
                </div>
            </section>
        </>
    );
};
