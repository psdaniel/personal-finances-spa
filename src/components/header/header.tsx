import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        backgroundColor: '#181818',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontFamily: 'Roboto',
        color: '#FECB00'
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
