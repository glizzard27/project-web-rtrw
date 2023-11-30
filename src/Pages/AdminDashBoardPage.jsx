import { React, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../Components/PrimaryButton'
import pic1 from '../Assets/img/warga.jpg'
import pic2 from '../Assets/img/user.jpg'
import pic3 from '../Assets/img/berita.jpg'
import pic4 from '../Assets/img/bubblechat.png'
import pic5 from '../Assets/img/rembug.jpg'
import pic6 from '../Assets/img/pengumuman.jpg'
import pic7 from '../Assets/img/strukturOrganisasi.jpg'
import SimpleCard from '../Components/SimpleCard'
import Swal from 'sweetalert2'
import axios from 'axios'

const AdminDashBoardPage = () => {

    const [adminName, setAdminName] = useState('');
    const navigate = useNavigate();

    // Judul Halaman
    useEffect(() => {
        // Ambil data admin yang sedang login
        const getAdminData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/admin');
                if (response.data.admin) {
                    const admin = response.data.admin.username;
                    setAdminName(admin);
                } else {
                    setAdminName(''); // Reset adminName jika session tidak diatur
                }
            } catch (error) {
                console.log(error);
            }
        };

        getAdminData();
        document.title = "Web RT.001/RW.006 | Dashboard"
    }, []);

    const handleLogout = async () => {
        try {
            // Logout admin
            await axios.post('http://localhost:5000/logout');
            localStorage.removeItem('admin');
            Swal.fire({
                icon: 'success',
                title: 'Anda berhasil Keluar!',
            }).then(() => {
                // Arahkan ke halaman beranda setelah berhasil logout
                navigate('/');
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            <div className='h-full w-full font-poppins bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                {/* Header */}
                <header className=' flex flex-col items-center py-10 lg:items-start lg:pl-20'>
                    <div className='text-5xl font-semibold text-white '>
                        Halo Admin {adminName}
                    </div>
                    <p className='text-2xl font-light text-white text-center py-4'>Selamat Datang di Dashboard Admin</p>
                    {/* LogOut Button */}
                    <button onClick={handleLogout} className='lg:absolute lg:left-3/4 lg:mt-5'>
                        <PrimaryButton className='bg-red-500 hover:bg-red-700 py-3 px-24 md:px-48 lg:px-12 rounded-lg shadow-md'>Keluar</PrimaryButton>
                    </button>
                </header>
                {/* Admin Dashboard Cards */}
                <section className='flex flex-col items-center pt-5 pb-20 mx-5 lg:mx-0'>
                    {/* Cards */}
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
                        {/* Card 1 */}
                        <Link to='/admindatakeluarga'><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic1}>Data Keluarga & Warga</SimpleCard></Link>

                        {/* Card 2 */}
                        <Link to='/admindataadmin'><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic2}>Data Admin</SimpleCard></Link>

                        {/* Card 3 */}
                        <Link to='/adminberita'><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic3}>Berita RT/RW</SimpleCard></Link>

                        {/* Card 4 */}
                        <Link to='/adminkritiksaran'><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic4}>Kritik / Saran Warga</SimpleCard></Link>

                        {/* Card 5 */}
                        <Link to=''><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic5}>Jadwal Siskamling RT/RW</SimpleCard></Link>

                        {/* Card 6 */}
                        <Link to=''><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic6}>Pengumuman</SimpleCard></Link>

                        {/* Card 7 */}
                        <Link to=''><SimpleCard className='lg:hover:transform lg:hover:scale-110 lg:hover:translate-y-[-10px]' gambar={pic7}>Struktur Organisasi</SimpleCard></Link>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default AdminDashBoardPage