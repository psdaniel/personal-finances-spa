import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({onClick}: ButtonProps) => {
    const useStyles = makeStyles(() => ({
        buttonStyles: () => ({
            backgroundColor: MainTheme.colors.mainYellow,
            color: MainTheme.colors.black,
            fontSize: '1.2em',
            fontWeight: 'bold',
            padding: '1em',
            width: MainTheme.buttons.width,
            height: 62,
            borderRadius: 4,
            textAlign: 'center',
            cursor: 'pointer',
            border: 'none',
            textDecoration: 'none',
            margin: 0,
            display: 'inline-block',
            transition: 'border-radius linear 0.05s, width linear 0.05s',
            position: 'relative',
            '&:focus': {
                outline: 0
            },
            '&:hover': {
                backgroundColor: MainTheme.buttons.colors.hover,
                color: MainTheme.colors.gray
            }
        }),
        animateButton: () => {
            const spinnerWidth = MainTheme.buttons.width / 6;
            return {
                width: MainTheme.buttons.width / 2.2,
                height: MainTheme.buttons.width / 2.2,
                minWidth: 0,
                borderRadius: '50%',
                color: 'transparent',
                '&::after': {
                    position: 'absolute',
                    content: '',
                    width: spinnerWidth,
                    height: spinnerWidth,
                    border: '4px solid #fefefe',
                    borderRadius: '50%',
                    borderLeftColor: 'transparent',
                    left: '50%',
                    top: '50%'
                }
            };
        }
    }));

    const classes = useStyles();
    return (
        <button className={classes.buttonStyles} onClick={onClick}>
            Adicionar
        </button>
    );
};
