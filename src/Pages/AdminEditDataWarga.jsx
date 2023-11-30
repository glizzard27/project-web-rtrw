import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from '../Components/Topbar'
import { ChevronDown } from "react-feather";
import Swal from "sweetalert2";

const AdminEditDataWarga = () => {

    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState("");
    const [jk, setJK] = useState("Laki-laki");
    const [posisi, setPosisi] = useState("Kepala Keluarga");
    const [status, setStatus] = useState("Menikah");
    const [agama, setAgama] = useState("Islam");
    const [pendidikan, setPendidikan] = useState("Strata");
    const navigate = useNavigate();
    const { id_warga } = useParams();

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Edit Data Warga";
        const getWargaById = async () => {
            const response = await axios.get(`http://localhost:5000/datakeluarga/warga/${id_warga}`);
            setNama(response.data.nama);
            setUsia(response.data.usia);
            setJK(response.data.jk);
            setPosisi(response.data.posisi);
            setStatus(response.data.status);
            setAgama(response.data.agama);
            setPendidikan(response.data.pendidikan);
        };
        getWargaById();
    }, [id_warga]);

    const updateWarga = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/datakeluarga/warga/${id_warga}`, {
                nama,
                usia,
                jk,
                posisi,
                status,
                agama,
                pendidikan
            });
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Data Warga Berhasil Di Update !',
        })
    }

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar className='z-50'>Edit Data Warga</Topbar>
            {/* Form Edit Data Warga */}
            <section className="py-24">
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-1/2">
                        <form onSubmit={updateWarga}>
                            {/* Fill Form Nama */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    placeholder="Masukkan Nama Warga"
                                />
                            </div>
                            {/* Fill Form Usia */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Usia
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={usia}
                                    onChange={(e) => setUsia(e.target.value)}
                                    placeholder="Masukkan Usia Warga"
                                />
                            </div>
                            {/* Fill Form Jenis Kelamin */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Jenis Kelamin
                                </label>
                                <div className="relative">
                                    <select
                                        value={jk}
                                        onChange={(e) => setJK(e.target.value)}
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            {/* Fill Form Posisi */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Posisi Dalam Keluarga
                                </label>
                                <div className="relative">
                                    <select
                                        value={posisi}
                                        onChange={(e) => setPosisi(e.target.value)}
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Kepala Keluarga">Kepala Keluarga</option>
                                        <option value="Anggota Keluarga">Anggota Keluarga</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            {/* Fill Form Status */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Status Perkawinan
                                </label>
                                <div className="relative">
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Menikah">Menikah</option>
                                        <option value="Belum Menikah">Belum Menikah</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            {/* Fill Form Agama */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Agama Yang Dianut
                                </label>
                                <div className="relative">
                                    <select
                                        value={agama}
                                        onChange={(e) => setAgama(e.target.value)}
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Islam">Islam</option>
                                        <option value="Protestan">Kristen Protestan</option>
                                        <option value="Katolik">Kristen Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddha">Buddha</option>
                                        <option value="Konghucu">Konghucu</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            {/* Fill Form Pendidikan */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Pendidikan Terakhir
                                </label>
                                <div className="relative">
                                    <select
                                        value={pendidikan}
                                        onChange={(e) => setPendidikan(e.target.value)}
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Strata">Strata</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Menengah">Menengah</option>
                                        <option value="Dasar">Dasar</option>
                                        <option value="TidakSekolah">Tidak Sekolah</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            {/* Button Aksi */}
                            <div className="flex items-center justify-center py-3">
                                <button
                                    onClick={handleSubmitButtonClick}
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 w-full rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminEditDataWarga