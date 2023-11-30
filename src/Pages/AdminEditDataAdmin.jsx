import { React, useEffect, useState } from 'react'
import AuthLayout from '../Layouts/AuthLayout';
import TextInput from '../Components/TextInput'
import PrimaryButton from '../Components/PrimaryButton'
import logo from '../Assets/img/logo.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Eye, EyeOff } from 'react-feather';

const AdminEditDataAdmin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Edit Data Admin";
        const getAdminById = async () => {
            const response = await axios.get(`http://localhost:5000/admins/${id}`);
            setUsername(response.data.admin.username);
            setPassword(response.data.admin.password);
        }
        getAdminById();
    }, [id]);

    const updateAdmin = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/admins/${id}`, {
                username,
                password,
            });
            // Response berhasil
            Swal.fire({
                icon: 'success',
                title: 'Data Admin Berhasil di Update !',
            });

            navigate('/dashboard');
        } catch (error) {
            // Response error
            Swal.fire({
                icon: 'error',
                title: 'Data Admin Gagal di Update !',
            });
            console.log(error);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            <AuthLayout className='bg-geo1'>

                {/* Section Back To Data Admin Page Button */}
                <PrimaryButton className="absolute z-50 -mt-14 -ml-5 bg-red-500 hover:bg-red-700 ">
                    <Link to="/admindataadmin">
                        Kembali Ke Halaman Data Admin
                    </Link>
                </PrimaryButton>

                {/* Section Header Auth */}
                <div className='flex flex-col justify-center'>
                    <img src={logo} alt="Logo Kota Bekasi" className='w-20 h-20 md:w-24 md:h-24 mx-auto my-3' />
                    <h1 className="capitalize font-semibold text-xl text-center">Edit Akun Data Admin</h1>
                </div>

                {/* Section Body Auth */}
                <form onSubmit={updateAdmin} className="mt-8">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="username">Username</label>
                            <TextInput
                                type="text"
                                id="username"
                                required
                                className="block w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="relative">
                            <label htmlFor="password">Password</label>
                            <div className="flex items-center">
                                <TextInput
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    required
                                    className="block w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <button type="button" onClick={togglePasswordVisibility} className="ml-2 focus:outline-none">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button type='submit'>
                                <PrimaryButton className="px-28 bg-teal-500 hover:bg-teal-700">Update Data</PrimaryButton>
                            </button>
                        </div>
                    </div>
                </form>

            </AuthLayout>
        </div>
    )
}

export default AdminEditDataAdmin