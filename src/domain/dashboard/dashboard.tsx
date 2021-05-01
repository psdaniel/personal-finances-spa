import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ShowFinances} from '../show-finances/show-finances';
import {MainTheme} from '../../themes/main';

export const Dashboard = () => {
    const useStyles = makeStyles({
        sectionContainer: {
            backgroundColor: MainTheme.colors.gray,
            width: '100%',
            height: '100vh'
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.sectionContainer}>
                <ShowFinances />
            </section>
        </>
    );
};
