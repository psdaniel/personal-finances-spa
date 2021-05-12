import React, {ChangeEvent} from 'react';
import {useStyles} from './input.styles';
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
