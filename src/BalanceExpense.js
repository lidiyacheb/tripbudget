import React, { useState } from 'react';
import './BalanceExpense.css';
import EditIcon from '@material-ui/icons/Edit';

export default function BalanceExpense({
    totalExpenses,
    totalBalance,
    leftoverBalance,
    setTotalBalance,
}) {
    const locStor = window.localStorage;
    const [edit, setEdit] = useState(true);
    const [inputBalance, setInputBalance] = useState(totalBalance);

    const toggle = () => {
        if (!edit) {
            setTotalBalance(inputBalance);
            locStor.setItem('balance', inputBalance);
        }
        setEdit(!edit);
    };

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Remaining</h4>
                <p className="money plus">€{leftoverBalance}</p>
            </div>
            <div>
                <h4>Total balance</h4>
                {edit ? (
                    <p className="money plus">€{totalBalance}</p>
                ) : (
                    <input
                        style={{
                            fontSize: '17px',
                            width: '45px',
                            margin: '5px 0',
                        }}
                        type="number"
                        value={inputBalance}
                        onChange={(e) => setInputBalance(e.target.value)}
                    />
                )}
                <button onClick={toggle}>
                    <EditIcon />
                </button>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">€{totalExpenses}</p>
            </div>
        </div>
    );
}
