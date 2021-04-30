import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';

export const ShowDebts = () => {
    const useStyles = makeStyles({
        showDebtsContainer: {
            backgroundColor: '#212424',
            height: 500
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.showDebtsContainer}>Show Debts</section>
            <div>
                <Input />
                <Button />
            </div>
        </>
    );
};
