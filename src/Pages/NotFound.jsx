import { React, useEffect } from "react"
import { Link } from "react-router-dom"
import PrimaryButton from "../Components/PrimaryButton"

export default function NotFound() {
    // Judul Halaman
    useEffect(() => {
        document.title = "Halaman Tidak Ditemukan"
    }, []);
    return (
        <div className="bg-batik h-screen">
            <div class="flex flex-col gap-5 items-center justify-center h-full text-white">
                <h1 className="drop-shadow-xl font-bold text-9xl">404</h1>
                <h2 className="drop-shadow-xl font-medium text-3xl text-center">Maaf Halaman Tidak Ditemukan !</h2>
                <Link to="/" className="text-white text-xl hover:underline">
                    <PrimaryButton className=" px-2 bg-slate-600 hover:bg-slate-900">Kembali Ke Halaman Utama</PrimaryButton>
                </Link>
            </div>
        </div>
    )
}