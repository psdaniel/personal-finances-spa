import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {GetValues} from '../get-values/get-values';
import {TotalFinances} from '../total-finances/total-finances';
import {useFinancesData} from '../contexts/finances-context/finances-context';

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
            height: 750,
            width: 650
        },
        financesFeed: {
            width: 500,
            height: 500,
            backgroundColor: '#fefefe',
            border: `2px solid ${MainTheme.colors.mainYellow}`,
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
                    <TotalFinances />
                    <div className={classes.financesFeed}></div>
                    <div className={classes.financesInputContainer}>
                        <GetValues />
                    </div>
                </div>
            </section>
        </>
    );
};
