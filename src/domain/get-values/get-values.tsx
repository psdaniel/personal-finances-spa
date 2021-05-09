import React, {ChangeEvent, useState} from 'react';
import {Input} from '../../components/input/input';
import {SwitchComponent} from '../../components/switch-component/switch-component';
import {useFinancesData} from '../contexts/finances-context/finances-context';

export const GetValues = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [data, setData] = useState({});

    const {state} = useFinancesData();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setInputValue('R$');
        }
        setInputValue(event.target.value);
    };

    const handleFocus = () => {
        console.log('teste');
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
            <SwitchComponent
                name="switch-value"
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </>
    );
};
