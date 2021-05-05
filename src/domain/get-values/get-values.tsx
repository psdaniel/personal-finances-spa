import React, {ChangeEvent, useState} from 'react';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {useFinancesData} from '../contexts/finances-context/finances-context';
import {getMoney, formatReal, formatStringCurrencyToNumber} from './get-values.utils';

export const GetValues = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [data, setData] = useState({});

    const {state, dispatch} = useFinancesData();

    console.log(state);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setInputValue('R$');
        }
        setInputValue(event.target.value);
    };

    const handleFocus = () => {
        console.log('teste');
    };

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
            <Input
                type="input"
                placeholder="R$ 0,00"
                name="debt"
                id="debt"
                onChange={handleChange}
                onFocus={handleFocus}
                value={inputValue}
            />
            <Button onClick={handleClick} />
        </>
    );
};
