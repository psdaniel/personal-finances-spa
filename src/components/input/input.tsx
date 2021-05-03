import React, {ChangeEvent} from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    name: string;
    id: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({type, placeholder, value, name, id, onChange, onFocus}: InputProps) => {
    const useStyles = makeStyles({
        inputStyle: {
            border: '2px solid',
            borderRadius: '4px',
            fontSize: '1rem',
            height: 62,
            width: '100%',
            marginRight: 4,
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
                value={value}
                name={name}
                id={id}
                onChange={onChange}
                onFocus={onFocus}
            />
        </>
    );
};
