import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatistikUsia = () => {
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

    const categorizeByAge = (age) => {
        if (age >= 0 && age <= 3) {
            return 'Bayi (0-3 Tahun)';
        } else if (age >= 4 && age <= 12) {
            return 'Anak-anak (4-12 Tahun)';
        } else if (age >= 13 && age <= 22) {
            return 'Remaja (13-22 Tahun)';
        } else if (age >= 23 && age <= 59) {
            return 'Dewasa (23-59 Tahun)';
        } else if (age >= 60) {
            return 'Lansia (60 Tahun Keatas)';
        } else {
            return 'Usia Tidak Valid';
        }
    };

    const countByAgeCategory = data.reduce((count, warga) => {
        const ageCategory = categorizeByAge(warga.usia);
        count[ageCategory] = (count[ageCategory] || 0) + 1;
        return count;
    }, {});

    const chartData = {
        labels: Object.keys(countByAgeCategory),
        datasets: [
            {
                data: Object.values(countByAgeCategory),
                backgroundColor: [
                    '#0EA5E9',
                    '#EC4899',
                    '#FFC107',
                    '#4CAF50',
                    '#9C27B0',
                ],
                hoverBackgroundColor: [
                    '#0369A1',
                    '#BE005D',
                    '#FFA000',
                    '#388E3C',
                    '#7B1FA2',
                ],
            },
        ],
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Data Usia Warga',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        width: 400,
        height: 400,
    };

    return (
        <div className="m-0 p-0">
            <section>
                <Navbar />
            </section>

            <section className="pt-36">
                <div className="flex justify-center">
                    <div className="w-1/2 h-1/2">
                        <Pie data={chartData} options={chartOptions} />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="capitalize text-3xl font-semibold text-center">
                    Data Usia Warga
                </div>
                <div className="py-10">
                    <ul className=" gap-3 text-xl font-normal text-center">
                        {Object.entries(countByAgeCategory).map(([category, count]) => (
                            <li key={category}>
                                {category}: {count} Warga
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default StatistikUsia;
