import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Berita = () => {
    const [Berita, setBerita] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Berita RT/RW";
        getBerita();
    }, []);

    const getBerita = async () => {
        const response = await axios.get("http://localhost:5000/berita");
        setBerita(response.data);
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            <Navbar />
            <header className='font-poppins pt-36 w-[80%] mx-auto lg:pt-32'>
                <div className='font-semibold text-4xl text-center'>Berita RT/RW</div>
                <hr className='mt-5 border-t-4 border-dark-chocolate' />
            </header>
            <section className='container flex justify-center py-8 lg:py-4'>
                <div className='my-10 mx-5 grid grid-cols-1 lg:mx-0 lg:grid-cols-3 gap-10'>
                    {Berita.map((berita) => (
                        <div className='col-span-1 lg:hover:transform lg:hover:scale-105' key={berita.id}>
                            {/* The News Card */}
                            <Link to={`/detailberita/${berita.id}`}>
                                <div className='max-w-sm shadow-xl'>
                                    <img className='object-center' src={berita.url} alt="Gambar Berita" />
                                    <div className='px-6 py-4 bg-white'>
                                        <p className='font-semibold text-xl'>{berita.title}</p>
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

export default Berita