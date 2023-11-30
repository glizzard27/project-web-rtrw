import React from 'react'

const HeroJumbotron = ({ className }) => {
    return (
        <header className={`h-screen bg-hero bg-cover bg-center font-poppins ${className}`}>
            <div className="flex flex-col justify-center text-center items-center h-full drop-shadow-lg mx-5 ">
                <h2 className="text-white text-5xl lg:text-6xl font-bold">Selamat Datang</h2>
                <h1 className=" text-xl lg:text-2xl text-white font-medium py-5 shadow-md">
                    Di Website RT.001/RW.006
                    <span className='flex flex-col items-center '>
                        Kelurahan Jakamulya, Kecamatan Bekasi Selatan, Kota Bekasi, Provinsi Jawa Barat
                    </span>
                </h1>
            </div>
        </header>
    )
}

export default HeroJumbotron