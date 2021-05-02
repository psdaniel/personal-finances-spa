import React, {ChangeEvent, useState} from 'react';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';
import {
    FinancesDataProvider,
    useFinancesData
} from '../contexts/finances-context.ts/finances-context';

export const GetValues = () => {
    const [financeValue, setFinanceValue] = useState<string>();
    const [data, setData] = useState({});
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFinanceValue(event.target.value);
        if (financeValue) {
            const valueFormatted = Number(financeValue);
            setData({
                data: {
                    value: valueFormatted
                }
            });
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
    };

    console.log(data);

    return (
        <>
            <Input type="input" placeholder="Debt" name="debt" id="debt" onChange={handleChange} />
            <Button onClick={handleClick} />
        </>
    );
};
