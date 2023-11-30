import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Topbar from '../Components/Topbar'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Components/PrimaryButton'
import Swal from 'sweetalert2'


const AdminBerita = () => {
    const [Berita, setBerita] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Admin Berita";
        getBerita();
    }, []);

    const getBerita = async () => {
        const response = await axios.get("http://localhost:5000/berita");
        setBerita(response.data);
    }

    const deleteBerita = async (beritaId) => {
        try {
            await axios.delete(`http://localhost:5000/berita/${beritaId}`)
            // Response berhasil
            Swal.fire({
                icon: 'success',
                title: 'Berita Berhasil Dihapus!',
            });
            getBerita();
        } catch (error) {
            // Response error
            Swal.fire({
                icon: 'error',
                title: 'Data Admin Gagal Dihapus !',
            });
            console.log(error);
        }
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/* Topbar */}
            <Topbar>
                Berita RT/RW
            </Topbar>
            <Link to="/adminberita/tambahberita">
                <PrimaryButton className='fixed left-[60%] md:left-3/4 mt-4 bg-emerald-400 hover:bg-emerald-600'> + Tambah Berita</PrimaryButton>
            </Link>

            {/* Header Title */}
            <header className='font-poppins pt-32 w-[80%] mx-auto'>
                <div className='font-semibold text-4xl text-center'>Kelola Berita RT/RW</div>
                <hr className='mt-5 border-t-4 border-dark-chocolate' />
            </header>

            {/* Content */}
            <section className='container flex justify-center'>
                <div className='my-10 mx-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {Berita.map((berita) => (
                        <div className='col-span-1 lg:hover:transform lg:hover:scale-105' key={berita.id}>
                            {/* The News Card */}
                            <Link to={`/adminberita/detailberita/${berita.id}`}>
                                <div className='max-w-sm shadow-2xl'>
                                    <img className='object-center' src={berita.url} alt="Gambar Berita" />
                                    <div className='px-6 py-4 bg-white'>
                                        <p className='font-semibold text-xl'>{berita.title}</p>
                                    </div>
                                    <div className='flex justify-center px-6 py-4 bg-white space-x-5'>
                                        <Link to={`/adminberita/updateberita/${berita.id}`} className=" bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded">
                                            ✏ Edit
                                        </Link>
                                        <button onClick={() => deleteBerita(berita.id)} className=" bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded">
                                            🗑 Hapus
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default AdminBerita