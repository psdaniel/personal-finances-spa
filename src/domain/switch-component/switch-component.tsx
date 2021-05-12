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
    DEFAULT = 'addButton',
    DEBT = 'addDebtButton',
    REVENUE = 'addRevenueButton'
}

export const SwitchComponent = ({name, onClick, inputValue, setInputValue}: SwitchButtonProps) => {
    const buttonComponents = {
        addDebtButton: ButtonTypes.DEBT,
        addRevenueButton: ButtonTypes.REVENUE
    };

    const [buttonType, setButtonType] = useState(ButtonTypes.DEFAULT);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

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

    const handleDebtButtonClick = () => {
        setIsAddButtonDisabled(!isAddButtonDisabled);
        setButtonType(ButtonTypes.DEBT);
    };

    const handleRevenueButtonClick = () => {
        setIsAddButtonDisabled(!isAddButtonDisabled);
        setButtonType(ButtonTypes.REVENUE);
    };

    const handleAddClicks = {
        addDebtButton: () => {
            dispatch({
                type: 'ADD_DEBT',
                payload: {...state, debt: formatStringCurrencyToNumber(inputValue), debtor: 'teste'}
            });
        },
        addRevenueButton: () => {
            dispatch({
                type: 'ADD_REVENUE',
                payload: {
                    ...state,
                    revenue: formatStringCurrencyToNumber(inputValue),
                    credor: 'teste2'
                }
            });
        }
    };
    console.log(state);
    return (
        <>
            {buttonType === ButtonTypes.DEFAULT ? (
                <Button
                    buttonText="Add"
                    buttonName="addButton"
                    onClick={handleClick}
                    isDisabled={isAddButtonDisabled}
                />
            ) : (
                <Button
                    buttonText="Add"
                    buttonName={buttonComponents[buttonType]}
                    onClick={handleAddClicks[buttonType]}
                />
            )}
            <div className={classes.switchContainer}>
                <Button buttonText="Debt" buttonName="debtButton" onClick={handleDebtButtonClick} />
                <Button
                    buttonText="Revenue"
                    buttonName="revenueButton"
                    onClick={handleRevenueButtonClick}
                />
            </div>
        </>
    );
};
