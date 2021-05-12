import React from 'react';
import {useStyles} from './button.styles';
interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    buttonName: keyof ButtonKey;
    buttonText: string;
}
interface ButtonKey {
    addButton: string;
    revenueButton: string;
    debtButton: string;
}

export const Button = ({onClick, buttonName, buttonText, isDisabled}: ButtonProps) => {
    const classes = useStyles();

    return (
        <button className={`${classes[buttonName]}`} onClick={onClick} disabled={isDisabled}>
            {buttonText}
        </button>
    );
};
