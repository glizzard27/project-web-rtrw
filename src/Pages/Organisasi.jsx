import { React, useEffect } from 'react'
import logo from '../Assets/img/logo.png'
import PakRT from '../Assets/img/pico8.png'
import Sekretaris from '../Assets/img/pico6.png'
import Bendahara from '../Assets/img/pico3.png'
import Humas1 from '../Assets/img/pico5.png'
import Humas2 from '../Assets/img/pico7.png'
import KK1 from '../Assets/img/pico1.png'
import KK2 from '../Assets/img/pico2.png'
import KPL from '../Assets/img/pico4.png'
import SPKK from '../Assets/img/pico10.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Organisasi = () => {
    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Struktur Organisasi"
    }, []);
    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <header className=' bg-white w-full h-max flex justify-center items-center pt-32 lg:pt-28 lg:pb-10'>
                <div className='flex flex-col font-poppins mx-5 lg:mx-0 lg:flex-row lg:space-x-32'>
                    {/* Logo Kota Bekasi */}
                    <div className=" relative mx-auto top-3 lg:top-10 ">
                        <img src={logo} alt="Logo" className="w-32 h-32 lg:h-40 lg:w-40" />
                    </div>
                    {/* Keterangan */}
                    <div className='uppercase font-semibold text-center text-4xl py-10 lg:text-start lg:text-5xl'>
                        Struktur Organisasi
                        <p className='capitalize flex flex-col font-light text-xl pt-5 lg:text-start'>RT.001/RW.006 <br /> Kelurahan Jakamulya, Kecamatan Bekasi Selatan, <br /> Kota Bekasi, Provinsi Jawa Barat
                        </p>
                    </div>
                </div>
            </header>
            <hr className='block mx-auto w-3/4 h-2 rounded-full bg-gray-800' />

            {/* Section List Organization*/}
            <section className='bg-white w-full h-max'>
                <div className='mx-5 lg:mx-0'>
                    {/* Pimpinan Utama */}
                    <div className='uppercase text-center font-poppins font-semibold text-3xl py-10 lg:text-4xl'>
                        Pimpinan
                        <ul className='flex flex-col items-center lg:items-start'>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={PakRT} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Ketua RT.001</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Mathin Surya</h3>
                                </span>
                            </li>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={Sekretaris} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Sekretaris RT.001/RW.006</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Djoko Susilo</h3>
                                </span>
                            </li>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={Bendahara} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Bendahara RT.001/RW.006</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Widya Sukmawati</h3>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Seksi */}
                    <div className='uppercase text-center font-poppins font-semibold text-3xl py-10 lg:text-4xl'>
                        Humas
                        <ul className='flex flex-col items-center lg:items-start'>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={Humas1} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi 1</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Andika Fahrezi</h3>
                                </span>
                            </li>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={Humas2} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi 2</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Eko Kurniawan</h3>
                                </span>
                            </li>
                        </ul>
                    </div>


                    {/* Keamanan */}
                    <div className='uppercase text-center font-poppins font-semibold text-3xl py-10 lg:text-4xl'>
                        Keamanan dan Ketertiban
                        <ul className='flex flex-col items-center lg:items-start'>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={KK1} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi 1</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Rahman Supriyatna</h3>
                                </span>
                            </li>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={KK2} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi 2</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Adi Hidayat</h3>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Kebersihan Dan Prasarana Lingkungan */}
                    <div className='uppercase text-center font-poppins font-semibold text-3xl py-10 lg:text-4xl'>
                        Kebersihan Dan Prasarana Lingkungan
                        <ul className='flex flex-col items-center lg:items-start'>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={KPL} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Wieke Mulyani</h3>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Sosial Dan PKK */}
                    <div className='uppercase text-center font-poppins font-semibold text-3xl py-10 lg:text-4xl'>
                        Sosial Dan PKK
                        <ul className='flex flex-col items-center lg:items-start'>
                            <li className='flex flex-col items-center py-8 lg:flex-row lg:relative lg:left-1/3 '>
                                <img src={SPKK} alt="Ketua RW 006" className='w-48 h-48 rounded-full object-center' />
                                <span className='flex flex-col pt-10 text-center lg:text-start lg:ml-20'>
                                    <h3 className='text-xl font-semibold lg:text-3xl'>Seksi</h3>
                                    <h3 className='text-lg font-medium lg:text-2xl'>Erna Herawati</h3>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Organisasi