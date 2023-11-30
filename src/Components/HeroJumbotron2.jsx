import React from 'react'

const HeroJumbotron2 = () => {
    return (
        <header className={`h-screen bg-hero2 bg-cover bg-center font-poppins`}>
            <div className='h-screen bg-black/[0.5] bg-cover bg-center'>
                <div className="flex flex-col justify-center text-center items-center h-full drop-shadow-lg ">
                    <h2 className="text-white text-5xl lg:text-6xl font-bold shadow-lg">Program Kerja Kepengurusan</h2>
                    <h1 className=" text-xl lg:text-2xl text-white font-normal pt-14 shadow-lg">
                        RT.001/RW.006
                        <span className='flex flex-col items-center py-2 '>
                            Tahun 2019-2024
                        </span>
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default HeroJumbotron2