import { React, useEffect } from 'react'
import Footer from '../Components/Footer'
import logo from '../Assets/img/logo.png'
import Navbar from '../Components/Navbar'


const TataTertib = () => {

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Tata Tertib"
    }, []);

    const tatatertibwarga = [
        'Menghormati sesama warga RT dan tetangga.',
        'Menjaga kebersihan lingkungan, termasuk halaman, jalan, dan fasilitas umum.',
        'Mengurangi kebisingan pada jam-jam istirahat, seperti larut malam atau pagi hari.',
        'Menghormati waktu dan privasi tetangga dengan tidak melakukan gangguan yang tidak perlu.',
        'Menghindari tindakan yang mengganggu ketertiban umum dan keamanan warga.',
        'Melaporkan kejadian atau hal-hal mencurigakan kepada aparat keamanan setempat.',
        'Menghindari tindakan yang melanggar hukum, seperti pencurian, penipuan, atau tindak kekerasan.',
        'Menjaga keamanan rumah dan fasilitas umum dengan tidak meninggalkan pintu dan jendela terbuka saat tidak ada penghuni.',
        'Mengutamakan parkir dengan tertib dan tidak memblokir jalan atau akses warga lain.',
        'Berpartisipasi dalam kegiatan gotong royong dan pengembangan lingkungan.',
    ];

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/* Navbar */}
            <Navbar />
            {/* Header */}
            <header className='bg-white w-full h-max flex justify-center items-center pt-32 lg:pt-28' >
                <div className='flex flex-col font-poppins mx-5 lg:mx-0'>
                    <div className='relative mx-auto top-3'>
                        <img src={logo} alt="Logo" className='w-32 h-32' />
                    </div>
                    <div className='uppercase font-semibold text-3xl text-center py-10'>
                        Peraturan / Tata Tertib Rukun Tetangga
                        <p className='capitalize font-medium text-xl py-3'>RT.001/RW.006 <br /> Kelurahan Jakamulya, Kecamatan Bekasi Selatan, <br /> Kota Bekasi, Provinsi Jawa Barat</p>
                    </div>
                </div>
            </header>
            <hr className='block mx-auto w-3/4 h-2 rounded-full bg-gray-800' />
            {/* Content */}
            <section className='bg-white w-full h-max'>
                <div className='mx-auto w-3/4 lg:w-[80%]'>
                    <p className='py-10 font-lora font-medium text-center text-xl lg:pt-14'>
                        Kehidupan bermasyarakat dan bersosialisasi merupakan pondasi kebersamaan dan kekeluargaan. Dalam keluarga besar RT.001/RW.006, kita berupaya hidup berdampingan dengan damai melalui interaksi sosial yang positif. Tujuan kita adalah mencapai kehidupan bertetangga yang damai, harmonis, dan kreatif. <br /> Oleh karena itu, Disusunlah Peraturan/Tata Tertib Rukun Tetangga yang melindungi kepentingan seluruh warga sekaligus memperhatikan masyarakat secara umum.
                    </p>
                    <ol className='text-lg list-decimal space-y-3 py-10 lg:ml-8'>
                        {
                            tatatertibwarga.map((poin) => (
                                <li key={poin}>{poin}</li>
                            ))
                        }
                    </ol>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default TataTertib