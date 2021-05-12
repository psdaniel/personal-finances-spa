import React from 'react';
import {useStyles} from './button.styles';
interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
}

export const Button = ({onClick, isDisabled}: ButtonProps) => {
    const classes = useStyles();

    return (
        <button className={classes.buttonStyles} onClick={onClick} disabled={isDisabled}>
            Add
        </button>
    );
};
