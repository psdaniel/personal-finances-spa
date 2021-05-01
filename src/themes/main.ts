const colors = {
    mainYellow: '#FECB00',
    black: '#181818',
    'black-2': '#212424',
    gray: '#434141'
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
    }
};
