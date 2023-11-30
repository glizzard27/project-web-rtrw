import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import Topbar from '../Components/Topbar';

const AdminDetailDataKeluarga = () => {
    const [anggotaKeluargas, setAnggotaKeluargas] = useState([]);
    const { id_keluarga } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Data Anggota Keluarga";

        const getdetailAnggotaKeluargas = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/datakeluarga/${id_keluarga}/warga`
                );
                setAnggotaKeluargas(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id_keluarga !== 'undefined') {
            getdetailAnggotaKeluargas();
        }
    }, [id_keluarga]);

    if (isLoading) {
        return <div>Loading...</div>; // Tampilkan loading spinner atau pesan loading lainnya
    }

    if (error) {
        return (
            <div className="m-0 p-0">
                {/* Topbar */}
                <Topbar>Data Anggota Keluarga</Topbar>

                {/* Tombol Tambah Data Anggota Keluarga */}
                <section className="pt-32">
                    <div className="flex justify-center">
                        <div className="text-sm md:text-lg">
                            <Link to={`/admindatawarga/tambahdatawarga/${id_keluarga}/warga`}>
                                <PrimaryButton className=" px-18 md:px-48 lg:px-60 py-5 rounded-lg bg-emerald-400 hover:bg-emerald-600">
                                    Tambah Data Anggota Keluarga
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section Error Message */}
                <section className="w-full h-screen">
                    <div className="flex flex-wrap justify-center md:max-lg:pt-60 pt-24">
                        <div className=" flex flex-col capitalize text-center text-4xl lg:text-6xl font-bold text-red-500 hover:text-red-700">
                            Terjadi Sebuah Kesalahan !
                            <p className="py-10 text-2xl lg:text-4xl font-medium leading-normal text-stone-900">
                                Kemungkinan Data Anggota Keluarga Tidak Ditemukan, Silahkan Tambah Data Anggota Keluarga.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (anggotaKeluargas.length === 0) {
        return (
            <div className="m-0 p-0">
                {/* Topbar */}
                <Topbar>Data Anggota Keluarga</Topbar>

                {/* Tombol Tambah Data Anggota Keluarga */}
                <section className="pt-32">
                    <div className="flex justify-center">
                        <div className="text-sm md:text-lg">
                            <Link to={`/admindatawarga/tambahdatawarga/${id_keluarga}/warga`}>
                                <PrimaryButton className=" px-18 md:px-48 lg:px-60 py-5 rounded-lg bg-emerald-400 hover:bg-emerald-600">
                                    Tambah Data Anggota Keluarga
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section Error Message */}
                <section className="w-full h-screen">
                    <div className="flex flex-wrap justify-center md:max-lg:pt-60 pt-24">
                        <div className=" flex flex-col capitalize text-center text-4xl lg:text-6xl font-bold text-red-500 hover:text-red-700">
                            Terjadi Sebuah Kesalahan !
                            <p className="py-10 text-2xl lg:text-4xl font-medium leading-normal text-stone-900">
                                Kemungkinan Data Anggota Keluarga Tidak Ditemukan, Silahkan Tambah Data Anggota Keluarga.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="m-0 p-0">
            {/* Topbar */}
            <Topbar>Data Anggota Keluarga</Topbar>

            {/* Tombol Tambah Data Anggota Keluarga */}
            <section className="pt-32">
                <div className="flex justify-center">
                    <div className="text-sm md:text-lg">
                        <Link to={`/admindatawarga/tambahdatawarga/${id_keluarga}/warga`}>
                            <PrimaryButton className=" px-18 md:px-48 lg:px-60 py-5 rounded-lg bg-emerald-400 hover:bg-emerald-600">
                                Tambah Data Anggota Keluarga
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </section>



            {/* Data Anggota Keluarga CRUD Table */}
            <section className="flex justify-center py-16">
                <div className="grid grid-cols-1 place-items-center">
                    <div className="w-full">
                        <table className="border-collapse border border-gray-400 w-full overflow-x-auto">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        No
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Nama
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Usia
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Jenis Kelamin
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Posisi
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Status
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Agama
                                    </th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">
                                        Pendidikan
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {anggotaKeluargas.map((ak, index) => (
                                    <tr key={ak.id_warga}>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.nama}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.usia}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.jk}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.posisi}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.status}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.agama}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            {ak.pendidikan}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminDetailDataKeluarga;
