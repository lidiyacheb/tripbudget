import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Chart() {
    const [barData, setBarData] = useState({
        labels: ['Bus', 'Airplane', 'Taxi', 'Hotel', 'Food', 'Attractions'],
        datasets: [
            {
                label: 'test label',
                data: [50, 200, 100, 400, 30, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderWidth: 3,
            },
        ],
    });

    return (
        <div>
            <h2>Chart</h2>
            <Doughnut
                data={barData}
                width={'100%'}
                options={{ responsive: true, maintainAspectRatio: false }}
            />
        </div>
    );
}
