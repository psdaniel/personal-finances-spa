import React from 'react';
import {Button} from '../../components/button/button';
import {Input} from '../../components/input/input';

export const GetValues = () => {
    return (
        <>
            <Input type="input" placeholder="Debt" name="debt" id="debt" />
            <Button />
        </>
    );
};
