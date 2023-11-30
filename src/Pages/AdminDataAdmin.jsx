import { React, useEffect, useState } from 'react'
import Topbar from '../Components/Topbar'
import { Link } from 'react-router-dom';
import PrimaryButton from '../Components/PrimaryButton';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminDataAdmin = () => {
    const [admins, setAdmins] = useState([])

    // Judul Halaman
    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Data Admin"
        getAllDataAdmins();
    }, []);

    const getAllDataAdmins = async () => {
        const response = await axios.get("http://localhost:5000/admins");
        setAdmins(response.data.admins);
    }

    const deleteAdmin = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/admins/${id}`);
            // Response berhasil
            Swal.fire({
                icon: 'success',
                title: 'Data Admin Berhasil Dihapus!',
            });
            getAllDataAdmins();
        } catch (error) {
            // Response error
            Swal.fire({
                icon: 'error',
                title: 'Data Admin Gagal Dihapus !',
            });
            console.log(error);
        }
    };
    return (
        <div className='overflow-x-hidden m-0 p-0'>
            {/* Topbar */}
            <Topbar>
                Data Admin
            </Topbar>

            {/* Tombol Tambah Akun Admin */}
            <section className="pt-32">
                <div className="flex justify-center">
                    <div className="text-sm md:text-lg">
                        <Link to='/register'>
                            <PrimaryButton className=" px-18 md:px-48 lg:px-60 py-5 rounded-lg bg-emerald-400 hover:bg-emerald-600">
                                + Tambah Akun Admin
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section CRUD Data Akun Admin */}
            <section className="flex justify-center" >
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-full flex justify-center">
                        <table className="border-collapse border border-gray-400 mt-4 w-[90%] lg:w-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6">No</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6">Username Admin</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin, index) => (
                                    <tr key={admin.id}>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">{admin.username}</td>
                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                            <div className="flex flex-wrap space-x-0 space-y-3 lg:space-x-3 lg:space-y-0">
                                                <Link
                                                    to={`/adminedit/${admin.id}`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    ✏ Edit
                                                </Link>
                                                <button
                                                    onClick={() => deleteAdmin(admin.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded text-sm"
                                                >
                                                    🗑 Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDataAdmin