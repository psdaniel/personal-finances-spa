import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

export const useStyles = makeStyles({
    inputStyle: {
        border: '2px solid',
        borderRadius: '4px',
        fontSize: '1rem',
        height: 62,
        width: '100%',
        marginRight: 4,
        minWidth: '125px',
        padding: '0.5rem',
        transition: 'border-color 0.5 ease-out',
        color: MainTheme.colors.gray,
        '&:focus': {
            borderColor: MainTheme.colors.mainYellow,
            color: MainTheme.colors.gray,
            border: `2px solid ${MainTheme.colors.black}`
        }
    }
});
