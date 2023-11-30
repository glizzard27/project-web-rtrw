import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatistikPendidikan = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Statistik Warga"

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/datakeluarga/warga');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const countByEducation = data.reduce((count, warga) => {
        count[warga.pendidikan] = (count[warga.pendidikan] || 0) + 1;
        return count;
    }, {});

    const chartData = {
        labels: Object.keys(countByEducation),
        datasets: [
            {
                data: Object.values(countByEducation),
                backgroundColor: [
                    'rgb(167, 139, 250)',
                    'rgb(34, 211, 238)',
                    'rgb(248, 113, 113)',
                    'rgb(52, 211, 153)',
                    'rgb(250, 204, 21)',
                ],
                hoverBackgroundColor: [
                    'rgb(124, 58, 237)',
                    'rgb(8, 145, 178)',
                    'rgb(220, 38, 38)',
                    'rgb(5, 150, 105)',
                    'rgb(202, 138, 4)',
                ],
            },
        ],
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Data Pendidikan Terakhir Warga',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        width: 1000,
        height: 1000,
    };

    return (
        <div className="m-0 p-0">
            <section>
                <Navbar />
            </section>

            <section className='pt-36'>
                <div className='flex justify-center'>
                    <div className='w-1/2 h-full'>
                        <Pie data={chartData} options={chartOptions} />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="capitalize text-3xl font-semibold text-center">Data Pendidikan Terakhir Warga</div>
                <div className="py-10">
                    <ul className="gap-3 text-xl font-normal text-center">
                        {Object.entries(countByEducation).map(([pendidikan, count]) => (
                            <li key={pendidikan}>{pendidikan}: {count} Warga</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default StatistikPendidikan;
