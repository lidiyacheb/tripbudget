import React from 'react';
import './ExpenseForm.css';
import CloseIcon from '@material-ui/icons/Close';

export default function Expense({ expense, index, removeExpense }) {
    let date = new Date(expense.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = (i) => {
        removeExpense(i);
    };

    return (
        // <div className="expense-item">
        //     <button className="remove-item" onClick={() => removeHandle(index)}>
        //         x
        //     </button>
        //     <div className="desc">{expense.desc}</div>
        //     <div className="price">€{expense.price}</div>
        //     <div className="date">{day + '/' + month + '/' + year}</div>
        // </div>
        <div class="timeline">
            <ul>
                <li>
                    <div class="bullet pink"></div>
                    <div class="time">{day + '/' + month + '/' + year}</div>
                    <div class="desc">
                        <h3 class="btn-desc">{expense.desc}</h3>
                        <h4 class="btn-price">€{expense.price}</h4>
                        <button
                            className="remove-item"
                            onClick={() => removeHandle(index)}
                        >
                            <CloseIcon width={5} />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
