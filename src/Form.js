import React, { useState } from 'react';
import './Form.css';

export default function Form({ onSubmit, onClick }) {
    const [country, setCountry] = useState('');
    const [budget, setBudget] = useState('');

    const [date, setDate] = useState(new Date());
    // changeHandler = (e) => {
    //     setCountry({
    //         [e.target.country]: e.target.value,
    //     });
    // };

    // const getDate = (date) => {
    //     setDate(date);
    // };

    return (
        <div className="form-popup" id="content">
            <form onSubmit={onSubmit} className="form-container">
                <label for="text">Type</label>
                <select>
                    <option value="budget">Budget</option>
                    <option value="expenses">Expenses</option>
                </select>
                <label for="text">Category</label>
                <select>
                    <option value="bus">Bus</option>
                    <option value="airplane">Airplane</option>
                    <option value="taxi">Taxi</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="attractions">Attractions</option>
                </select>

                <label for="text">Spending</label>
                <input
                    type="text"
                    placeholder="Add spending"
                    name={'text'}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    autocomplete="false"
                />

                <label for="text">Date</label>
                <input
                    type="date"
                    placeholder="Enter Date"
                    name={'text'}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    autocomplete="false"
                />

                <label for={'budget'}>Budget</label>
                <input
                    type={'text'}
                    placeholder="Enter Budget"
                    name={'budget'}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    autocomplete="false"
                />

                <button type="submit" className={'btn'} onClick={onClick}>
                    Submit
                </button>
            </form>
        </div>
    );
}
