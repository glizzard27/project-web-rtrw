import React, { useState, useEffect } from 'react';
import Topbar from '../Components/Topbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AdminDetailBerita = () => {
    const [berita, setBerita] = useState({});
    const [createdAtBerita, setCreatedAtBerita] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Admin Detail Berita"


        const getNewsById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/berita/${id}`);
                setBerita(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const getCreatedAtBeritaById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/berita/${id}/created-at`);
                setCreatedAtBerita(response.data.createdAt);
            } catch (error) {
                console.log(error);
            }
        };

        getNewsById();
        getCreatedAtBeritaById();
    }, [id]);

    return (
        <div>
            {/* Topbar */}
            <Topbar>Detail Berita</Topbar>
            {/* Detail Berita */}
            <section className='py-32 w-3/4 h-full flex flex-col mx-auto lg:py-32'>
                <h1 className='py-5 text-3xl font-bold text-center'>{berita.title}</h1>
                <div className='text-center text-lg'>{createdAtBerita}</div>
                <div className="flex mx-auto max-w-xl max-h-72 my-3">
                    <img src={berita.url} alt="Gambar Berita" className='py-5 w-full h-auto' />
                </div>
                <p className='py-5 font-lora text-base font-light text-justify' style={{ whiteSpace: 'pre-line' }}>{berita.content}</p>
            </section>
        </div>
    );
};

export default AdminDetailBerita;
