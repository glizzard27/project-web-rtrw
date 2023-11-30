import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatistikJK = () => {
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

    const countByGender = data.reduce((count, warga) => {
        count[warga.jk] = (count[warga.jk] || 0) + 1;
        return count;
    }, {});

    const chartData = {
        labels: Object.keys(countByGender),
        datasets: [
            {
                data: Object.values(countByGender),
                backgroundColor: ['#0EA5E9', '#EC4899',],
                hoverBackgroundColor: ['#0369A1', '#BE005D',],
            },
        ],
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Data Jenis Kelamin Warga',
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
                <div className="capitalize text-3xl font-semibold text-center">Data Jenis Kelamin Warga</div>
                <div className="py-10">
                    <ul className=" gap-3 text-xl font-normal text-center">
                        {Object.entries(countByGender).map(([gender, count]) => (
                            <li key={gender}>{gender}: {count} Warga</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default StatistikJK;
