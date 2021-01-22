import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Chart() {
    const locStor = window.localStorage;
    const expenses = JSON.parse(locStor.getItem('expenses'));
    const labels = ['Bus', 'Airplane', 'Taxi', 'Hotel', 'Food', 'Attractions'];
    const [barData, setBarData] = useState({
        labels,
        datasets: [
            {
                label: 'test label',
                data: labels.map((lab) =>
                    expenses
                        .filter(
                            (e) =>
                                e.category.toLowerCase() === lab.toLowerCase()
                        )
                        .reduce((accum, value) => accum + value.price, 0)
                ),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgb(160, 42, 192, 0.6)',
                    'rgb(150, 192, 42, 0.6)',
                ],
                borderWidth: 3,
            },
        ],
    });

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Chart</h2>
            <Doughnut
                width="500"
                height="300"
                data={barData}
                options={{ maintainAspectRatio: false, responsive: true }}
            />
        </div>
    );
}
