import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

export const Dashboard = () => {
    const useStyles = makeStyles({
        sectionContainer: {
            backgroundColor: '#434141',
            width: '100%',
            height: 400
        }
    });

    const classes = useStyles();

    return (
        <>
            <section className={classes.sectionContainer}>
                <div>Hello World</div>
            </section>
        </>
    );
};
