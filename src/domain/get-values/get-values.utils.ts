const regexToRemoveAllDigitsExceptNumbers = /\D+/g;

export const getMoney = (string: string) => parseInt(string.replace(/[\D]+/g, ''));

export const formatReal = (integer: number) => {
    const tmp = integer + '';
    const formattedTmp = tmp.replace(/([0-9]{2})$/g, ',$1');
    if (formattedTmp.length > 6) {
        return formattedTmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    return formattedTmp;
};

export const formatCurrencyToLocaleString = (value: number) =>
    value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

export const formatStringCurrencyToNumber = (value: string) => {
    const formattedValue = value.replace(regexToRemoveAllDigitsExceptNumbers, '');

    return formatCurrencyToLocaleString(Number(formattedValue));
};
