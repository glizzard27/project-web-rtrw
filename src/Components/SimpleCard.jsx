import React from 'react'

const SimpleCard = ({ children, gambar, className }) => {
    return (
        <div className={`max-w-lg rounded-xl overflow-hidden shadow-lg lg:w-80 ${className}`}>
            <img className="w-full" src={gambar} alt="Gambar Kartu" />
            <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl text-center mb-2">{children}</div>
            </div>
        </div>
    )
}

export default SimpleCard
