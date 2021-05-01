import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {MainTheme} from '../../themes/main';

export const ShowDebts = () => {
    const useStyles = makeStyles({
        showDebtsContainer: {
            backgroundColor: MainTheme.colors['black-2'],
            height: 500
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.showDebtsContainer}>Show Debts</section>
            <div>
                <Input type="input" placeholder="Debt" name="debt" id="debt" />
                <Button />
            </div>
        </>
    );
};
