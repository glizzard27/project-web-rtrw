import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatistikPosisi = () => {
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

    const countByPosition = data.reduce((count, warga) => {
        count[warga.posisi] = (count[warga.posisi] || 0) + 1;
        return count;
    }, {});

    const chartData = {
        labels: Object.keys(countByPosition),
        datasets: [
            {
                data: Object.values(countByPosition),
                backgroundColor: ['rgb(248, 113, 113)', 'rgb(251, 191, 36)'],
                hoverBackgroundColor: ['rgb(220, 38, 38)', 'rgb(217, 119, 6)'],
            },
        ],
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Data Posisi Warga Didalam Keluarga',
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
                <div className="capitalize text-3xl font-semibold text-center">Data Posisi Warga Didalam Keluarga</div>
                <div className="py-10">
                    <ul className=" gap-3 text-xl font-normal text-center">
                        {Object.entries(countByPosition).map(([position, count]) => (
                            <li key={position}>{position}: {count} Warga</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default StatistikPosisi;
