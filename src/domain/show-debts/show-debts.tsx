import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {MainTheme} from '../../themes/main';
import {GetValues} from '../get-values/get-values';

export const ShowDebts = () => {
    const useStyles = makeStyles({
        showDebtsContainer: {
            display: 'flex',
            backgroundColor: MainTheme.colors['black-2'],
            height: 700,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.showDebtsContainer}>
                Show Debts
                <div>
                    <GetValues />
                </div>
            </section>
        </>
    );
};
