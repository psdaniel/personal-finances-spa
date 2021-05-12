import {makeStyles} from '@material-ui/core';
import {CSSProperties} from '@material-ui/styles';
import {MainTheme} from '../../themes/main';

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

export const useStyles = makeStyles({
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
