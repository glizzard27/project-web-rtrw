import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import PrimaryButton from '../Components/PrimaryButton'
import Topbar from '../Components/Topbar'

const AdminDataKeluarga = () => {
    const [keluargas, setKeluargas] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Data Keluarga";
        getdetailKeluargas();
    }, []);

    const getdetailKeluargas = async () => {
        const response = await axios.get("http://localhost:5000/datakeluarga");
        setKeluargas(response.data);
    };

    const deleteKeluarga = async (id_keluarga) => {
        try {
            await axios.delete(`http://localhost:5000/datakeluarga/${id_keluarga}`);
            getdetailKeluargas();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar>Data Keluarga</Topbar>

            {/* Tombol untuk Menambah Data Keluarga dan Melihat Detail Warga */}
            <section className=" container mx-auto pt-32 pb-8">
                <div className="w-full ml-12 md:ml-24 lg:ml-48">
                    <div className="text-xs space-x-5 md:text-base">
                        {/* Tombol Tambah Data Keluarga */}
                        <Link to="/admindatakeluarga/tambahdatakeluarga">
                            <PrimaryButton className=' py-4 w-1/3 bg-emerald-400 hover:bg-emerald-600'>Tambah Data Keluarga</PrimaryButton>
                        </Link>

                        {/* Tombol Lihat Detail Semua Keluarga / Warga */}
                        <Link to="/admindatawarga/detaildatawarga">
                            <PrimaryButton className='py-4 w-1/3 bg-violet-400 hover:bg-violet-600'>Lihat Detail</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Data Keluarga CRUD Table */}
            <section className="flex justify-center pb-10">
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-full flex justify-center">
                        <table className="border-collapse border border-gray-400 mt-4 w-[90%] lg:w-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">No</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Nama Keluarga</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Alamat</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keluargas.map((klg, index) => (
                                    <tr key={klg.id_keluarga}>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">{index + 1}</td>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Keluarga {klg.nama_keluarga}</td>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">{klg.alamat}</td>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">
                                            <div className="flex flex-wrap gap-3">
                                                <Link
                                                    to={`/admindatawarga/detaildatakeluarga/${klg.id_keluarga}`}
                                                    className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    🔍 Detail
                                                </Link>
                                                <Link
                                                    to={`/admindatakeluarga/updatedatakeluarga/${klg.id_keluarga}`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    ✏ Edit
                                                </Link>
                                                <button
                                                    onClick={() => deleteKeluarga(klg.id_keluarga)}
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

export default AdminDataKeluarga