import React, { useState, useEffect } from 'react'
import Topbar from '../Components/Topbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const AdminTambahBerita = () => {
    const [judul, setJudul] = useState("");
    const [konten, setKonten] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const navigate = useNavigate();

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Tambah Berita"
    }, []);

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const saveBerita = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", judul);
        formData.append("content", konten);
        try {
            await axios.post("http://localhost:5000/berita", formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/adminberita");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Berita Berhasil Diposting !',
        })
    }

    return (
        <div>
            {/* Topbar */}
            <Topbar>
                Tambah Berita RT/RW
            </Topbar>

            {/* News Form */}
            <div className="max-w-xl py-24 mx-5 md:mx-auto">
                <form onSubmit={saveBerita}>
                    {/* Bagian Nama Berita */}
                    <div className="mb-10">
                        <label className="block font-bold mb-2 text-2xl">
                            Judul Berita
                        </label>
                        <input
                            type="text"
                            className="border border-gray-400 p-2 w-full"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            placeholder="Masukkan Nama Berita"
                        />
                    </div>

                    {/* Bagian Gambar Berita */}
                    <div className="mb-10">
                        <label className="block font-bold mb-2 text-2xl">
                            Gambar Berita
                        </label>
                        <div className="flex items-center">
                            <label className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded cursor-pointer">
                                <span className="mr-2">Unggah Gambar</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={loadImage}
                                />
                            </label>
                        </div>
                    </div>
                    {preview ? (
                        <figure className='w-48 h-36'>
                            <img src={preview} alt="Preview Images" />
                        </figure>
                    ) : ("")}

                    {/* Bagian Konten Berita */}
                    <div className="mb-10">
                        <label className="block font-bold mb-2 text-2xl">
                            Konten Berita
                        </label>
                        <textarea
                            className="border border-gray-400 p-2 w-full"
                            rows="10"
                            value={konten}
                            onChange={(e) => setKonten(e.target.value)}
                            placeholder="Masukkan Konten Berita"
                        ></textarea>
                    </div>

                    {/* Button Posting Berita */}
                    <div className='flex justify-center'>
                        <button onClick={handleSubmitButtonClick} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 w-full rounded">
                            Posting Berita
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminTambahBerita