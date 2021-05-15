import React, {ChangeEvent} from 'react';
import {useStyles} from './input.styles';
export interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    name: string;
    id: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    hasLabel?: boolean;
    theme: keyof ThemeKeys;
}

interface ThemeKeys {
    dark: string;
    light: string;
}

export const Input = (props: InputProps) => {
    const {type, placeholder, value, name, id, onChange, onFocus, hasLabel} = props;

    const classes = useStyles(props);
    return (
        <>
            {hasLabel ? <label className={classes.inputLabel}>{name}</label> : ''}
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
