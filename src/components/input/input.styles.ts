import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {InputProps} from './input';

const backgroundThemes = {
    dark: MainTheme.colors['black-2'],
    light: '#fff'
};

const borderColorThemes = {
    dark: `2px solid ${MainTheme.colors.mainYellow}`,
    light: `2px solid ${MainTheme.colors.black}`
};

const colorHoverThemes = {
    dark: MainTheme.colors.mainYellow,
    light: MainTheme.colors.gray
};

const backgroundColor = ({theme}: InputProps) => backgroundThemes[theme];

const borderColor = ({theme}: InputProps) => borderColorThemes[theme];

const colorHover = ({theme}: InputProps) => colorHoverThemes[theme];

export const useStyles = makeStyles(() => ({
    inputStyle: (props: InputProps) => ({
        border: '2px solid',
        borderRadius: '4px',
        backgroundColor: backgroundColor(props),
        fontSize: '1rem',
        width: 300,
        height: 62,
        marginRight: 4,
        marginBottom: 4,
        minWidth: '125px',
        padding: '0.5rem',
        transition: 'border-color 0.5 ease-out',
        color: MainTheme.colors.gray,
        '&:focus': {
            borderColor: MainTheme.colors.mainYellow,
            color: colorHover(props),
            border: borderColor(props),
            outline: 'none'
        }
    }),
    inputLabel: {
        color: MainTheme.colors.mainYellow,
        fontFamily: MainTheme.fonts.main,
        fontSize: '1.125rem',
        fontWeight: 'bold'
    }
}));
