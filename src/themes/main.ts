const colors = {
    mainYellow: '#FECB00',
    black: '#181818',
    'black-2': '#212424',
    gray: '#434141',
    red: '#FF3228',
    'red-2': '#D80303',
    green: '#6FFF28',
    'green-2': '#3B9710'
};

export const MainTheme = {
    colors,
    fonts: {
        main: 'Roboto, sans-serif',
        color: colors.black
    },
    buttons: {
        width: 150,
        borderRadius: 4,
        colors: {
            primary: {
                backgroundColor: colors.mainYellow
            },
            hover: '#FECB39'
        }
    },
    debtButton: {
        hover: '#FF170C'
    },
    revenueButton: {
        hover: '#00FF06'
    }
};
