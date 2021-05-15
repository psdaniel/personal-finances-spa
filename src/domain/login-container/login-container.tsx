import React from 'react';
import {Input} from '../../components/input/input';
import {makeStyles} from '@material-ui/core';
import {MainTheme} from '../../themes/main';

export const LoginContainer = () => {
    const useStyles = makeStyles({
        background: {
            backgroundColor: MainTheme.colors['black-2'],
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'
        },
        loginContainer: {
            backgroundColor: MainTheme.colors.black,
            width: '50%',
            height: '40vh',
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: `0 4px 4px ${MainTheme.colors.black}`
        },
        loginTitle: {
            fontFamily: MainTheme.fonts.main,
            color: MainTheme.colors.mainYellow,
            fontWeight: 'bold',
            fontSize: '2.25rem',
            marginTop: '0.50rem'
        },
        inputLoginContainer: {
            display: 'flex',
            flexDirection: 'column'
        }
    });

    const classes = useStyles();
    return (
        <section className={classes.background}>
            <div className={classes.loginContainer}>
                <span className={classes.loginTitle}>Login</span>
                <div className={classes.inputLoginContainer}>
                    <Input
                        type="text"
                        placeholder="E-mail"
                        name="E-mail"
                        id="email"
                        theme="dark"
                        hasLabel
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        name="Password"
                        id="password"
                        theme="dark"
                        hasLabel
                    />
                </div>
            </div>
        </section>
    );
};
