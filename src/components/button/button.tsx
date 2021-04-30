import React from 'react';
import {makeStyles} from '@material-ui/core';
import {StylesContext} from '@material-ui/styles';

export const Button = () => {
    const useStyles = makeStyles({
        buttonStyles: {
            backgroundColor: '#FECB00',
            color: '#181818'
        }
    });

    const classes = useStyles();
    return <button className={classes.buttonStyles}>Adicionar</button>;
};
