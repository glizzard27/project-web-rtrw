import { React, useState, useEffect } from 'react'
import axios from "axios";
import Topbar from '../Components/Topbar'
import Swal from 'sweetalert2';

const AdminKritikSaran = () => {
    const [kritiksarans, setKritikSarans] = useState([]);

    useEffect(() => {
        document.title = "Web RT.001/RW.006 | Kritik/Saran Warga";
        getAllKritikSaran();
    }, []);

    const getAllKritikSaran = async () => {
        const response = await axios.get("http://localhost:5000/kritiksaran");
        setKritikSarans(response.data);
    };

    const deleteKritikSaran = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/kritiksaran/${id}`);
            // Response berhasil
            Swal.fire({
                icon: 'success',
                title: 'Kritik / Saran Berhasil Dihapus!',
            });
            getAllKritikSaran();
        } catch (error) {
            // Response error
            Swal.fire({
                icon: 'error',
                title: 'Kritik / Saran Gagal Dihapus !',
            });
            console.log(error);
        }
    };

    return (
        <div className='m-0 p-0'>
            {/* Topbar */}
            <Topbar>Kritik / Saran Warga</Topbar>

            {/* Kritik Saran Read Table */}
            <section className="flex justify-center py-32">
                <div className="grid grid-cols-1 mt-5 place-items-center">
                    <div className="w-[80%] flex justify-center">
                        <table className="border-collapse border border-gray-400 mt-4 w-[90%] lg:w-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">No</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Nama Warga</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Pesan Saran/Kritik</th>
                                    <th className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kritiksarans.map((ks, index) => (
                                    <tr key={ks.id}>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">{index + 1}</td>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">{ks.nama}</td>
                                        <td className="border border-gray-400 text-start px-2 py-3 md:px-4 lg:px-6 ">{ks.pesan}</td>
                                        <td className="border border-gray-400 text-center px-2 py-3 md:px-4 lg:px-6 ">
                                            <div className="">
                                                <button
                                                    onClick={() => deleteKritikSaran(ks.id)}
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

export default AdminKritikSaran