import React from 'react'
import { ChevronLeft } from 'react-feather'

const BackNavButton = ({ className }) => {
    const handleClick = () => {
        // Kode untuk menavigasi ke halaman sebelumnya
        window.history.back();
    };
    return (
        <button onClick={handleClick}>
            <ChevronLeft size={30} className={`text-white rounded-full border-2 border-white hover:border-4 ${className} `} />
        </button>
    )
}

export default BackNavButton