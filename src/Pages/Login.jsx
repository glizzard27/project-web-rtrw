import { React, useState, useEffect } from 'react'
import AuthLayout from '../Layouts/AuthLayout'
import TextInput from '../Components/TextInput'
import PrimaryButton from '../Components/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/img/logo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { Eye, EyeOff } from 'react-feather';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Masuk"
    }, []);

    async function handleLogin(e) { // Mengubah menjadi async function
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/login', {
                username,
                password
            });

            // Response berhasil
            Swal.fire({
                icon: 'success',
                title: 'Anda Berhasil Login!',
            });

            // Mengarahkan ke halaman dashboard setelah berhasil login
            navigate('/dashboard');
        } catch (error) {
            // Response error
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal !',
                text: 'Username atau Password Invalid',
            });
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='overflow-x-hidden m-0 p-0'>
            <AuthLayout className='bg-batik1'>

                {/* Section Back To Main Page Button */}

                <PrimaryButton className="absolute z-50 -mt-14 bg-red-500 hover:bg-red-700 ">
                    <Link to="/">
                        Kembali Ke Halaman Beranda
                    </Link>
                </PrimaryButton>

                {/* Section Header Auth */}
                <div className='flex flex-col justify-center'>
                    <img src={logo} alt="Logo Kota Bekasi" className='w-18 h-20 md:w-20 md:h-24 mx-auto my-3' />
                    <h1 className="capitalize font-semibold text-xl text-center">Masuk Ke Halaman Admin</h1>
                </div>
                {/* Section Body Form Auth */}
                <form onSubmit={handleLogin} className="mt-8">
                    <div className="space-y-5">

                        <div>
                            <label htmlFor="username">Username</label>
                            <TextInput type="text" id="username" required className="block w-full" onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="relative">
                            <label htmlFor="password">Password</label>
                            <div className="flex items-center">
                                <TextInput type={showPassword ? "text" : "password"} id="password" required className="block w-full" onChange={(e) => setPassword(e.target.value)} />
                                <button type="button" onClick={togglePasswordVisibility} className="ml-2 focus:outline-none">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                        </div>

                        {/* login Button */}
                        <div className='flex justify-center'>
                            <button type="submit">
                                <PrimaryButton className="px-20 bg-teal-500 hover:bg-teal-700">Masuk</PrimaryButton>
                            </button>
                        </div>
                    </div>
                </form>
            </AuthLayout>
        </div>
    )
}

export default Login