import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {CSSProperties} from '@material-ui/styles';
import {Button} from '../button/button';
import {useFinancesData} from '../../domain/contexts/finances-context/finances-context';
import {formatStringCurrencyToNumber} from '../../domain/get-values/get-values.utils';

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

    const commonStyles: CSSProperties = {
        width: 100,
        height: 27,
        marginLeft: 4,
        border: 'none',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: MainTheme.colors.black,
        cursor: 'pointer',
        borderRadius: 4
    };

    const useStyles = makeStyles({
        switchContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        debtButton: {
            marginBottom: 6,
            backgroundColor: MainTheme.colors.red,
            ...commonStyles,
            '&:hover': {
                backgroundColor: MainTheme.debtButton.hover
            }
        },
        revenueButton: {
            backgroundColor: MainTheme.colors.green,
            ...commonStyles,
            '&:hover': {
                backgroundColor: MainTheme.revenueButton.hover
            }
        }
    });

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
            <Button onClick={handleClick} />
            <div className={classes.switchContainer}>
                <button className={classes.debtButton}>Debt</button>
                <button className={classes.revenueButton}>Revenue</button>
            </div>
        </>
    );
};
