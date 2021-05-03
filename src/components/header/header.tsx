import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {MainTheme} from '../../themes/main';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        backgroundColor: MainTheme.colors.black,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontFamily: 'Roboto',
        color: MainTheme.colors.mainYellow,
        fontSize: '3rem'
    }
});

export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.textHeader}>Personal Finances</h1>
        </div>
    );
};
