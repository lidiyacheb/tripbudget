import React from 'react';
import './BalanceExpense.css';

export default function BalanceExpense({ totalExpenses, totalBalance }) {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Balance</h4>
                <p className="money plus">€{totalBalance}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">€{totalExpenses}</p>
            </div>
        </div>
    );
}
