import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Topbar from '../Components/Topbar'

const AdminDetailDataWarga = () => {

    const [wargas, setWargas] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Data Warga";
        getdetailWargas();
    }, []);

    const getdetailWargas = async () => {
        const response = await axios.get("http://localhost:5000/datakeluarga/warga");
        setWargas(response.data);
    };

    const deleteWarga = async (id_warga) => {
        try {
            await axios.delete(`http://localhost:5000/datakeluarga/warga/${id_warga}`);
            getdetailWargas();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar>Data Warga</Topbar>

            {/* Data Warga CRUD Table */}
            <section className="flex justify-center py-32">
                <div className="grid grid-cols-1 place-items-center">
                    <div className="w-full">
                        <table className="border-collapse border border-gray-400 w-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 px-4 py-2 text-center">No</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Nama</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Usia</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Jenis Kelamin</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Posisi</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Status</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Agama</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Pendidikan</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wargas.map((wrg, index) => (
                                    <tr key={wrg.id_warga}>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.nama}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.usia}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.jk}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.posisi}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.status}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.agama}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{wrg.pendidikan}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            <div className="flex flex-wrap space-x-0 space-y-3 lg:space-x-3 lg:space-y-0">
                                                <Link
                                                    to={`/admindatawarga/updatedatawarga/warga/${wrg.id_warga}`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    ✏ Edit
                                                </Link>
                                                <button
                                                    onClick={() => deleteWarga(wrg.id_warga)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    🗑 Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDetailDataWarga