import React, { useState, useEffect } from 'react'
import Topbar from '../Components/Topbar'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const AdminUpdateBerita = () => {
    const [judul, setJudul] = useState("");
    const [konten, setKonten] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Update Berita"

        const getNewsById = async () => {
            const response = await axios.get(`http://localhost:5000/berita/${id}`);
            setJudul(response.data.title);
            setFile(response.data.image);
            setKonten(response.data.content);
            setPreview(response.data.url);
        };

        getNewsById();
    }, [id]);

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const updateBerita = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", judul);
        formData.append("content", konten);
        try {
            await axios.patch(`http://localhost:5000/berita/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/adminberita");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Berita Berhasil Diupdate !',
        })
    }

    return (
        <div>
            {/* Topbar */}
            <Topbar>
                Edit Berita RT/RW
            </Topbar>

            {/* News Form */}
            <div className="max-w-xl py-24 mx-5 md:mx-auto">
                <form onSubmit={updateBerita}>
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

                    {/* Button Update Berita */}
                    <div className='flex justify-center'>
                        <button onClick={handleUpdateButtonClick} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 w-full rounded">
                            Update Berita
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminUpdateBerita