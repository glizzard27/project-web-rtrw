import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from '../Components/Topbar'
import Swal from "sweetalert2";

const AdminEditDataKeluarga = () => {

    const [nama_keluarga, setNama_Keluarga] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();
    const { id_keluarga } = useParams();

    useEffect(() => {
        const getKeluargaById = async (id_keluarga) => {
            try {
                const response = await axios.get(`http://localhost:5000/datakeluarga/${id_keluarga}`);
                if (response.data) {
                    setNama_Keluarga(response.data.nama_keluarga);
                    setAlamat(response.data.alamat);
                }
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        document.title = "Web RT.001/RW.006 | Edit Data Keluarga";
        if (id_keluarga) {
            getKeluargaById(id_keluarga);
        }
        setNama_Keluarga(""); // Atur nilai awal state nama_keluarga ke string kosong
        setAlamat("");
    }, [id_keluarga]);


    const updateKeluarga = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/datakeluarga/${id_keluarga}`, {
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
            title: 'Data Keluarga Berhasil Di Update !',
        })
    }

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar className='z-50'>Update Data Keluarga</Topbar>
            {/* Form Edit Data Keluarga */}
            <section className="py-24">
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-1/2">
                        <form onSubmit={updateKeluarga}>
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

export default AdminEditDataKeluarga