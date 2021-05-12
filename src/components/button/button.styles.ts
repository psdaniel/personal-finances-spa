import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {CSSProperties} from '@material-ui/styles';

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

const commonAddButtonStyles: CSSProperties = {
    color: MainTheme.colors.black,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '1rem',
    width: MainTheme.buttons.width,
    height: 62,
    borderRadius: 4,
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    margin: 0,
    display: 'inline-block'
};

export const useStyles = makeStyles(() => ({
    addButton: () => ({
        ...commonAddButtonStyles,
        backgroundColor: MainTheme.colors.mainYellow,
        transition: 'border-radius linear 0.05s, width linear 0.05s',
        position: 'relative',
        '&:focus': {
            outline: 0
        },
        '&:hover': {
            backgroundColor: MainTheme.buttons.colors.hover,
            color: MainTheme.colors.gray
        },
        '&:disabled': {
            opacity: 0.7,
            cursor: 'initial'
        }
    }),
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
    },
    addDebtButton: {
        ...commonAddButtonStyles,
        backgroundColor: MainTheme.colors.red
    },
    addRevenueButton: {
        ...commonAddButtonStyles,
        backgroundColor: MainTheme.colors.green
    },
    animateButton: () => {
        const spinnerWidth = MainTheme.buttons.width / 6;
        return {
            width: MainTheme.buttons.width / 2.2,
            height: MainTheme.buttons.width / 2.2,
            minWidth: 0,
            borderRadius: '50%',
            color: 'transparent',
            '&::after': {
                position: 'absolute',
                content: '',
                width: spinnerWidth,
                height: spinnerWidth,
                border: '4px solid #fefefe',
                borderRadius: '50%',
                borderLeftColor: 'transparent',
                left: '50%',
                top: '50%'
            }
        };
    }
}));
