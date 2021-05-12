import React from 'react';
import {GetValues} from '../get-values/get-values';
import {TotalFinances} from '../total-finances/total-finances';
import {useFinancesData} from '../contexts/finances-context/finances-context';
import {useStyles} from './show-finances.styles';

export const ShowFinances = () => {
    const classes = useStyles();

    const {state} = useFinancesData();

    return (
        <>
            <section className={classes.feedComponent}>
                <div className={classes.showFinancesContainer}>
                    <TotalFinances data={state} />
                    <div className={classes.financesFeed}></div>
                    <div className={classes.financesInputContainer}>
                        <GetValues />
                    </div>
                </div>
            </section>
        </>
    );
};
