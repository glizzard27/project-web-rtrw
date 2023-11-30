import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'react-feather';

const Footer = () => {
    const instagramLink = "https://instagram.com/aku_suka_cuan?igshid=MzNlNGNkZWQ4Mg==";
    const youtubeLink = "https://youtube.com/@Muhammad_Fajar_Baihaqi";

    return (
        // Footer
        <footer className="bg-gray-800 py-8 lg:py-12">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <Link to={instagramLink} className="mr-4 text-white ">
                    <Instagram
                        size={40}
                        className="text-white transition-colors duration-300 hover:text-pink-400"
                    />
                </Link>
                <Link to={youtubeLink} className="text-white ">
                    <Youtube
                        size={40}
                        className="text-white transition-colors duration-300 hover:text-red-500"
                    />
                </Link>
            </div>
            <p className=" font-poppins text-center text-white pt-5 font-medium text-xs lg:text-base">
                Created By Muhammad Fajar Baihaqi (50421950) <span className='flex flex-col md:inline-flex '>© 2023.</span>
            </p>
        </footer>
    )
}

export default Footer