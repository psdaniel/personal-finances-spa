import React from 'react';
import {makeStyles} from '@material-ui/core';
import {StylesContext} from '@material-ui/styles';

export const Button = () => {
    const useStyles = makeStyles(() => ({
        buttonStyles: () => {
            const buttonWidht = 150;

            return {
                backgroundColor: '#FECB00',
                color: '#181818',
                fontSize: '1.2rem',
                padding: '1rem',
                width: buttonWidht,
                borderRadius: 4,
                textAlign: 'center',
                cursor: 'pointer',
                border: 'none',
                textDecoration: 'none',
                margin: 0,
                display: 'inline-block',
                transition: 'border-radius linear 0.05s, width linear 0.05s',
                '&:focus': {
                    outline: 0
                }
            };
        }
    }));

    const classes = useStyles();
    return <button className={classes.buttonStyles}>Adicionar</button>;
};
