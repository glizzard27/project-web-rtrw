import { React, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import HeroJumbotron2 from '../Components/HeroJumbotron2'
import Footer from '../Components/Footer'

const ProgramKerja = () => {

    const prokerketua = [
        "Koordinasi antar pengurus",
        "Menyampaikan aspirasi warga RT 001 ke tingkat RW 006",
        "Membantu Kebutuhan Administrasi RT bagi para Warga"
    ]
    const prokersekre = [
        "Membuat dan mengelola agenda rapat RT/RW serta mengirimkan undangan kepada warga.",
        "Mencatat dan mengarsipkan dokumen-dokumen penting seperti surat masuk, surat keluar, dan keputusan rapat.",
        "Mengkoordinasikan kegiatan administrasi RT/RW, termasuk pembuatan laporan kegiatan bulanan."
    ]
    const prokerbendahara = [
        "Mengelola keuangan RT/RW, termasuk penerimaan dan pengeluaran dana serta pembuatan laporan keuangan bulanan.",
        "Melakukan pengumpulan iuran warga RT/RW secara teratur dan mencatatnya dengan baik.",
        "Menyusun rencana anggaran untuk kegiatan RT/RW dan melakukan monitoring penggunaan dana sesuai dengan anggaran yang telah ditetapkan."
    ]
    const prokerhumas = [
        "Mengelola komunikasi dan hubungan antara RT/RW dengan warga masyarakat, termasuk penyampaian informasi terkait kegiatan dan kebijakan RT/RW.",
        "Mengelola media sosial atau website RT/RW untuk menyebarkan informasi dan mempromosikan kegiatan RT/RW.",
        "Mengadakan kegiatan sosialisasi dan pertemuan dengan warga untuk meningkatkan partisipasi dalam kegiatan RT/RW dan memperkuat solidaritas antarwarga."
    ]
    const prokerkk = [
        "Membentuk dan mengkoordinasikan kegiatan patroli keamanan lingkungan dalam RT/RW.",
        "Menyusun rencana tindakan dalam penanggulangan gangguan keamanan dan ketertiban di wilayah RT/RW.",
        "Mengadakan kegiatan sosialisasi tentang kesadaran akan keamanan dan mengedukasi warga mengenai langkah-langkah pencegahan tindak kejahatan."
    ]
    const prokerkpl = [
        "Mengkoordinasikan kegiatan pembersihan dan pemeliharaan lingkungan RT/RW, termasuk pengelolaan sampah, kebersihan jalan, dan penataan taman.",
        "Melakukan monitoring terhadap pelaksanaan program kebersihan, termasuk mengadakan kegiatan gotong royong secara berkala.",
        "Menggalang partisipasi warga dalam menjaga kebersihan lingkungan melalui kampanye dan sosialisasi tentang pentingnya kebersihan."
    ]
    const prokerspkk = [
        "Mengorganisir kegiatan sosial seperti bakti sosial, donor darah, atau penggalangan dana untuk membantu warga yang membutuhkan.",
        " Mengadakan pelatihan dan penyuluhan terkait keterampilan dan pengetahuan kepada warga, terutama dalam bidang kesehatan, pendidikan, dan kemandirian.",
        "Mengkoordinasikan kegiatan Pos Pelayanan Terpadu (Posyandu) dan Program Keluarga Berencana (PKK) di tingkat RT/RW untuk meningkatkan kesejahteraan dan kesehatan warga."
    ]

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Program Kerja"
    }, []);

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/* Navbar */}
            <Navbar />
            {/* Hero Jumbotron */}
            <HeroJumbotron2 />
            {/* Section Jobdesc */}
            <section className='bg-white w-full h-max flex justify-center items-center font-poppins'>
                <div className='py-5 px-10'>
                    {/* Jobdesc Area */}
                    <ul className='container flex flex-col justify-start capitalize'>
                        {/* Jobdesc List */}
                        {/* Ketua RT */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Ketua RT
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Mathin Surya</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerketua.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Sekretaris */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Sekretaris
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Djoko Susilo</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokersekre.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Bendahara */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Bendahara
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Widya Sukmawati</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerbendahara.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Humas */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Humas
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Andika Fahrezi, Eko Kurniawan</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerhumas.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Keamanan dan Ketertiban */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Keamanan dan Ketertiban
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Rahman Supriyatna, Adi Hidayat</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerkk.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Kebersihan Dan Prasarana Lingkungan*/}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Kebersihan Dan Prasarana Lingkungan
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Wieke Mulyani</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerkpl.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                        {/* Sosial Dan PKK */}
                        <li className='py-5'>
                            <div className='flex flex-col font-semibold text-2xl lg:text-3xl py-3'> Sosial dan PKK
                                <span className='font-semibold text-sm lg:text-base text-stone-500 flex flex-wrap'>Erna Herawati</span>
                            </div>
                            <ol className='list-decimal font-light ml-5'>
                                {
                                    prokerspkk.map((proker) => (
                                        <li key={proker}>{proker}</li>
                                    ))
                                }
                            </ol>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default ProgramKerja