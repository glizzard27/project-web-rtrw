import { React, useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topbar from '../Components/Topbar'
import Swal from 'sweetalert2';

const AdminTambahDataKeluarga = () => {
    const [nama_keluarga, setNama_Keluarga] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Tambah Data Keluarga";
    }, []);

    const saveKeluarga = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/datakeluarga", {
                nama_keluarga,
                alamat,

            });
            navigate("/admindatakeluarga");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Data Keluarga Berhasil Dibuat !',
        })
    }

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar className='z-50'>Tambah Data Keluarga</Topbar>
            {/* Form Tambah Data Warga */}
            <section className="py-24">
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-1/2">
                        <form onSubmit={saveKeluarga}>
                            {/* Fill Form Nama Keluarga */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Nama Keluarga
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={nama_keluarga}
                                    onChange={(e) => setNama_Keluarga(e.target.value)}
                                    placeholder="Masukkan Nama Keluarga (Masukkan Nama Kepala Keluarganya Saja)"
                                />
                            </div>

                            {/* Fill Form Alamat */}
                            <div className="mb-4 py-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                    placeholder="Masukkan Alamat Keluarga"
                                />
                            </div>

                            {/* Button Aksi */}
                            <div className="flex items-center justify-center py-3">
                                <button
                                    onClick={handleSubmitButtonClick}
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 w-full rounded focus:outline-none focus:shadow-outline"
                                >
                                    Simpan Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminTambahDataKeluarga