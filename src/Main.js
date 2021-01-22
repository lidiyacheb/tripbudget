import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import travel from './images/travel-bg.jpg';
import Logo from './images/logo_travel.png';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Form from './Form';

import BalanceExpense from './BalanceExpense';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: 'white',
        fontSize: '26px',
        fontWeight: '600',
        fontFamily: 'sans - serif',
        textTransform: 'uppercase',
        height: '200px',
        background: `url(${travel})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1,
    },
    logo: {
        paddingTop: '10px',
    },
    small: {
        fontSize: '12px',
        paddingTop: '10px',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: '24%',
        left: '-80%',
        right: 0,
        margin: '0 auto',
    },
}));

export default function Main() {
    const locStor = window.localStorage;

    const b = locStor.getItem('balance');
    const [balance, setBalance] = useState(b ? +b : 1000);
    const [show, setShow] = useState(false);
    let expenses = JSON.parse(locStor.getItem('expenses'));
    expenses = expenses ? expenses : [];
    const [expense, setExpense] = useState(expenses);
    const [totalExpenses, setTotalExpenses] = useState(
        balance -
            expenses
                .map((ex) => ex.price)
                .reduce((accum, val) => accum + val, 0)
    );
    const [totalBalance, setTotalBalance] = useState(balance);

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < expense.length; i++) {
            count += parseInt(expense[i].price);
        }

        setTotalExpenses(count);
    }, [expense]);

    useEffect(() => {
        setTotalBalance(
            balance -
                expenses
                    .map((ex) => ex.price)
                    .reduce((accum, val) => accum + val, 0)
        );
    }, [balance]);

    useEffect(() => {
        let count = balance;
        for (let i = 0; i < expense.length; i++) {
            count -= parseInt(expense[i].price);
        }

        setTotalBalance(count);
    }, [expense]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const onLoginFormSubmit = (e) => {
    //     e.preventDefault();
    //     handleClose();
    // };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12} title="Ted talk">
                <Paper className={classes.paper}>
                    <div className={classes.overlay}>
                        <Box
                            className={classes.logo}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <img src={Logo} alt="logo" height={70} width={70} />
                            <span>Welcome back</span>
                            <span className={classes.small}>
                                Choose your destination
                            </span>
                        </Box>
                    </div>
                </Paper>
                <Fab
                    onClick={handleShow}
                    color="secondary"
                    aria-label="add"
                    className={classes.fabButton}
                >
                    <AddIcon />
                </Fab>
            </Grid>

            {/* {show && (
                <Form onSubmit={onLoginFormSubmit} onClick={handleClose} />
            )} */}
            <BalanceExpense
                totalExpenses={totalExpenses}
                totalBalance={balance}
                leftoverBalance={totalBalance}
                setTotalBalance={setBalance}
            />
            {show && (
                <ExpenseForm
                    expense={expense}
                    setExpense={setExpense}
                    handleClose={handleClose}
                />
            )}

            <ExpenseList expense={expense} setExpense={setExpense} />
        </div>
    );
}
