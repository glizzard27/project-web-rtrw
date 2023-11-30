import { React, useEffect, useState } from 'react'
import PakRW from '../Assets/img/pico9.png'
import PakRT from '../Assets/img/pico8.png'
import Footer from '../Components/Footer';
import HeroJumbotron from '../Components/HeroJumbotron';
import Navbar from '../Components/Navbar';
import Galeri1 from '../Assets/img/galeri1.png'
import Galeri2 from '../Assets/img/galeri2.png'
import Galeri3 from '../Assets/img/galeri3.png'
import Galeri4 from '../Assets/img/galeri4.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';



const Beranda = () => {
    const [nama, setNama] = useState("");
    const [pesan, setPesan] = useState("");
    const navigate = useNavigate();

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Beranda"
    }, []);

    const sambutanRW =
        'Selamat datang di Website RT.001 / RW.006 Kelurahan Jakamulya, Kecamatan Bekasi Selatan, Kota Bekasi, Provinsi Jawa Barat ! Kami dengan gembira menghadirkan platform ini sebagai wadah informasi terkini bagi seluruh warga RT 001. Di era digital ini, kami ingin memperkuat hubungan dan saling terhubung antara kita semua. Melalui situs ini, Anda akan dapat dengan mudah berbagi informasi, berkoordinasi untuk kegiatan bersama, dan mempererat kolaborasi dalam memajukan lingkungan tempat tinggal kita yang tercinta. Mari bersama-sama berperan aktif dalam menjadikan lingkungan warga ini sebagai tempat yang aman, nyaman, dan harmonis bagi setiap warganya. Terima kasih atas partisipasi dan dukungan Anda.'


    const sambutanRT =
        'Salam hangat untuk semua pengunjung di Website RT.001 / RW.006 Kelurahan Jakamulya, Kecamatan Bekasi Selatan, Kota Bekasi, Provinsi Jawa Barat ! Kami sangat senang menyambut Anda di platform ini, yang akan menjadi sumber informasi penting bagi warga RT. Dengan situs ini, kami berharap dapat mempererat ikatan dalam komunitas kita dan meningkatkan komunikasi antara setiap warga RT. Melalui kolaborasi dan kerjasama yang lebih baik, kita dapat saling berbagi informasi, merencanakan kegiatan yang bermanfaat, dan membangun kehidupan yang lebih baik bagi seluruh warga RT. Mari kita semua aktif terlibat dalam membentuk lingkungan yang lebih baik dan memberikan kontribusi positif bagi kehidupan sehari-hari di RT ini.'

    const missions = [
        'Meningkatkan keamanan dan ketertiban lingkungan',
        'Meningkatkan pelayanan dasar bagi warga RT',
        'Mendorong partisipasi aktif warga dalam pembangunan lingkungan',
        'Membangun kesadaran akan pentingnya lingkungan bersih dan sehat',
        'Meningkatkan hubungan antarwarga dan memperkuat kerjasama komunitas',
        'Mengoptimalkan pemanfaatan teknologi dalam pengelolaan RT',
    ]

    const galleries = [
        Galeri1,
        Galeri2,
        Galeri3,
        Galeri4,
    ]

    const sendKritikSaran = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/kritiksaran", {
                nama,
                pesan,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Saran/Kritik Anda Gagal Dikirimkan !',
                text: 'Nama Warga Dan Pesan Saran / Kritik Wajib Diisi ! , Silahkan Coba lagi.',
            });
            console.log(error);
            navigate("/");
        }
    };

    const handleSubmitButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Saran/Kritik Anda Berhasil Dikirimkan !',
            text: 'Terimakasih atas Saran/Kritik dari anda',
        })
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/*Navbar */}
            <Navbar />
            {/* Hero Jumbotron*/}
            <HeroJumbotron />

            {/* Section Perwakilan Ketua RT/RW */}
            <section className='w-full h-max' >
                <div className=' font-poppins font-semibold text-center lg:text-left mt-10 lg:ml-10 text-slate-800 text-4xl lg:text-6xl'>Kata Sambutan</div>
                <hr className='mt-5 border-t-4 border-dark-chocolate' />

                {/* Sesi Pak RW */}
                <div className='py-3'>
                    <div className=' relative flex lg:flex-row flex-col gap-8 mt-10 left-1 lg:left-1/3 items-center'>
                        {/* Image Figure */}
                        <img src={PakRW} alt="Ketua RW 006" className='w-36 h-36 md:w-48 md:h-48 rounded-full object-center' />
                        {/* Profile Biodata */}
                        <div className=' flex flex-col font-semibold text-3xl md:text-4xl'> Budiman Makariem
                            <span className='text-xl text-center md:text-2xl'>
                                Ketua RW.006
                            </span>
                        </div>
                    </div>

                    {/* Paragraph Sambutan */}
                    <article className=' w-4/5 text-center mt-10 mx-auto md:mt-16 md:text-xl'>
                        <p className='font-lora'>
                            {sambutanRW}
                        </p>
                    </article>
                </div>

                {/* Sesi Pak RT*/}
                <div className='py-10'>
                    <div className=' relative flex lg:flex-row flex-col gap-8 mt-10 left-1 lg:left-1/3 items-center'>
                        {/* Image Figure */}
                        <img src={PakRT} alt="Ketua RT 001" className='w-36 h-36 md:w-48 md:h-48 rounded-full object-center' />
                        {/* Profile Biodata */}
                        <div className=' flex flex-col font-semibold text-3xl md:text-4xl'> Mathin Surya
                            <span className='text-xl text-center md:text-2xl'>
                                Ketua RT.001
                            </span>
                        </div>
                    </div>

                    {/* Paragraph Sambutan */}
                    <article className=' w-4/5 text-center mt-10 mx-auto md:mt-16 md:text-xl'>
                        <p className='font-lora'>
                            {sambutanRT}
                        </p>
                    </article>
                </div>


            </section>

            {/* Section Visi Misi */}
            <section className="w-full max-h-max bg-dark-chocolate">
                <div className="mx-auto relative inset-x-0 inset-y-20 flex flex-col justify-center pb-20 mt-10 lg:mt-20 ">
                    <div className="text-center uppercase text-4xl md:text-6xl font-bold text-white">
                        Visi Misi Kami
                    </div>
                    {/* Cards */}
                    <div className="flex flex-col my-20 mx-auto w-4/5 space-y-10">
                        <div className=" bg-white border rounded-lg p-5 ">
                            <div className="font-bold text-center lg:text-left text-4xl lg:text-5xl mb-5">Visi</div>
                            <p className='font-lora font-medium text-center md:my-20 text-sm md:text-base '>
                                "Mewujudkan lingkungan RT yang harmonis, aman, dan sejahtera melalui
                                partisipasi aktif seluruh warga dalam pembangunan sosial dan
                                peningkatan kualitas hidup."
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-5">
                            <div className="font-bold text-center lg:text-left text-4xl lg:text-5xl mb-5">Misi</div>
                            <ol className='font-lora font-medium list-decimal ml-5 space-y-3 text-sm md:text-base'>
                                {
                                    missions.map((misi) => (
                                        <li key={misi}>{misi}</li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeri Section */}
            <section className='w-full h-max'>
                <div className='py-10'>
                    <div className='font-poppins font-semibold text-center lg:text-left lg:ml-10 text-slate-800 text-4xl lg:text-6xl'>Galeri</div>
                    {/* Images Gallery Card */}
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-5 py-10 mx-5'>
                            {
                                galleries.map((picture, index) => (
                                    <img key={index} src={picture} alt={`Gambar Galeri ${index + 1}`} className='rounded-xl' />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Lokasi Kantor Section */}
            <section className='w-full h-max'>
                <div className='py-10'>
                    <div className='font-poppins font-semibold text-center lg:text-left lg:ml-10 text-slate-800 text-4xl lg:text-6xl'>Lokasi Kantor</div>
                    {/* Peta Lokasi */}
                    <div className='py-10 flex justify-center items-center'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5154987219836!2d106.96275702849569!3d-6.255563399606664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dab0e31447d%3A0x83b7895eec748885!2sJl.%20Pelangi%20IV%20E%20No.29%2C%20RT.002%2FRW.006%2C%20Jaka%20Mulya%2C%20Kec.%20Bekasi%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017146!5e0!3m2!1sid!2sid!4v1687323126355!5m2!1sid!2sid"
                            title="Peta Lokasi Kantor RTRW"
                            className='w-[360px] h-[270px] md:w-[720px] md:h-[405px] lg:w-[960px] lg:h-[540px]'
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Kritik / Saran Warga Form */}
            <section className='w-full h-max'>
                <div className='py-10'>
                    {/* Header */}
                    <div className='font-poppins font-semibold text-center lg:text-left lg:ml-10 text-slate-800 text-4xl lg:text-6xl'>Kritik / Saran</div>
                    {/* Form Kritik / Saran */}
                    <section className="py-8">
                        <div className="grid grid-cols-1 mt-5 place-items-center">
                            <div className="w-3/4">
                                <form onSubmit={sendKritikSaran}>
                                    {/* Fill Form Nama Warga */}
                                    <div className="mb-4 py-3">
                                        <label className="block text-gray-700 text-base font-bold mb-2">
                                            Nama Warga
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={nama}
                                            onChange={(e) => setNama(e.target.value)}
                                            placeholder="Masukkan Nama Anda Disini"
                                        />
                                    </div>

                                    {/* Fill Form Pesan Saran/Kritik */}
                                    <div className="mb-4 py-3">
                                        <label className="block text-gray-700 text-base font-bold mb-2">
                                            Pesan Saran/Kritik
                                        </label>
                                        <textarea
                                            rows="8"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline"
                                            value={pesan}
                                            onChange={(e) => setPesan(e.target.value)}
                                            placeholder="Masukkan Saran / Kritik Anda Disini"
                                        >
                                        </textarea>
                                    </div>

                                    {/* Button Aksi */}
                                    <div className="flex items-center justify-center py-3">
                                        <button
                                            onClick={handleSubmitButtonClick}
                                            type="submit"
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 w-full rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Kirim Saran/Kritik
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Beranda