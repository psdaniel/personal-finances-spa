import React from 'react';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';
import {CSSProperties} from '@material-ui/styles';

type SwitchButtonProps = {
    name: string;
};

type CommonStylesType = {
    width: number;
    height: number;
    marginLeft: number;
    border: string;
    fontWeight: string;
    textDecoration: string;
    color: string;
};

export const SwitchComponent = ({name}: SwitchButtonProps) => {
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

    const useStyles = makeStyles({
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

    const classes = useStyles();
    return (
        <div className={classes.switchContainer}>
            <button className={classes.debtButton}>Debt</button>
            <button className={classes.revenueButton}>Revenue</button>
        </div>
    );
};
