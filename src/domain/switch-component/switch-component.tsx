import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import {Button} from '../../components/button/button';
import {useFinancesData} from '../contexts/finances-context/finances-context';
import {formatStringCurrencyToNumber} from '../get-values/get-values.utils';
import {useStyles} from './switch-component.styles';

type SwitchButtonProps = {
    name: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    inputValue: string;
    setInputValue: (inputValue: string) => void;
};

enum ButtonTypes {
    DEFAULT = 'default-button',
    DEBT = 'debt-button',
    REVENUE = 'revenue-button'
}

export const SwitchComponent = ({name, onClick, inputValue, setInputValue}: SwitchButtonProps) => {
    const [buttonType, setButtonType] = useState(ButtonTypes.DEFAULT);
    const [isAddButtonEnabled, setIsAddButtonEnabled] = useState(false);

    const classes = useStyles();

    const {state, dispatch} = useFinancesData();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (inputValue) {
            const inputValueFormatted = formatStringCurrencyToNumber(inputValue);
            dispatch({
                type: 'ADD_DEBT',
                payload: {...state, debt: inputValueFormatted, debtor: 'teste'}
            });
        }
    };
    return (
        <>
            <Button
                buttonText="Add"
                buttonName="addButton"
                onClick={handleClick}
                isDisabled={false}
            />
            <div className={classes.switchContainer}>
                <Button buttonText="Debt" buttonName="debtButton" />
                <Button buttonText="Revenue" buttonName="revenueButton" />
            </div>
        </>
    );
};
