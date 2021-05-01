import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {MainTheme} from '../../themes/main';
import {GetValues} from '../get-values/get-values';

export const ShowFinances = () => {
    const useStyles = makeStyles({
        feedComponent: {
            display: 'flex',
            backgroundColor: MainTheme.colors['black-2'],
            justifyContent: 'center'
        },
        showFinancesContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 700,
            width: 700
        },
        financesFeed: {
            width: 500,
            height: 500,
            backgroundColor: '#fefefe',
            marginBottom: 4
        },
        financesInputContainer: {
            display: 'flex',
            padding: 2,
            justifyContent: 'space-between',
            width: 500
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.feedComponent}>
                <div className={classes.showFinancesContainer}>
                    <div className={classes.financesFeed}>
                        <h1>DebtsFeed</h1>
                    </div>
                    <div className={classes.financesInputContainer}>
                        <GetValues />
                    </div>
                </div>
            </section>
        </>
    );
};