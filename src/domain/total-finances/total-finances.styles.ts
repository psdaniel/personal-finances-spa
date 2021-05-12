import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

export const useStyles = makeStyles({
    totalFinances: {
        display: 'flex',
        justifyContent: 'center',
        width: 500,
        height: '4rem'
    },
    textStyle: {
        fontWeight: 'bold',
        color: MainTheme.colors.mainYellow,
        fontSize: '2rem'
    },
    totalRevenue: {
        fontFamily: MainTheme.fonts.main,
        fontWeight: 'bold',
        fontSize: '2rem',
        color: MainTheme.colors['green-2'],
        marginRight: '2.5rem'
    },
    totalDebt: {
        fontFamily: MainTheme.fonts.main,
        fontWeight: 'bold',
        fontSize: '2rem',
        color: MainTheme.colors['red-2'],
        marginLeft: '2.5rem'
    }
});
