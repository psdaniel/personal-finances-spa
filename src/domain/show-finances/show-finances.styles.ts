import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

export const useStyles = makeStyles({
    feedComponent: {
        display: 'flex',
        backgroundColor: MainTheme.colors['black-2'],
        justifyContent: 'center'
    },
    showFinancesContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 750,
        width: 650
    },
    financesFeed: {
        width: 500,
        height: 500,
        backgroundColor: '#fefefe',
        border: `2px solid ${MainTheme.colors.mainYellow}`,
        marginBottom: 4
    },
    financesInputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 500
    }
});
