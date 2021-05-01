import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
}

export const Input = ({type, placeholder, name, id}: InputProps) => {
    const useStyles = makeStyles({
        inputStyle: {
            border: '2px solid',
            borderRadius: '4px',
            fontSize: '1rem',
            margin: '0.25rem',
            height: 54,
            minWidth: '125px',
            padding: '0.5rem',
            transition: 'border-color 0.5 ease-out',
            color: MainTheme.colors.gray,
            '&:focus': {
                borderColor: MainTheme.colors.mainYellow,
                color: MainTheme.colors.gray,
                border: `2px solid ${MainTheme.colors.black}`
            }
        }
    });

    const classes = useStyles();
    return (
        <>
            <input
                className={classes.inputStyle}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
            />
        </>
    );
};
