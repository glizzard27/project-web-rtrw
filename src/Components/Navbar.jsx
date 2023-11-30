import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/img/logo.png';
import PrimaryButton from './PrimaryButton';
import { ChevronDown } from "react-feather";
import { Menu, X } from 'react-feather';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(null);
    const menuRef1 = useRef(null);
    const menuRef2 = useRef(null);
    const menuRef3 = useRef(null);
    const menuRef4 = useRef(null);


    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = (index) => {
        setDropdownOpen(index === isDropdownOpen ? null : index);
    };

    const handleClickOutsideMenu = (event) => {
        if (
            menuRef1.current &&
            !menuRef1.current.contains(event.target) &&
            menuRef2.current &&
            !menuRef2.current.contains(event.target) &&
            menuRef3.current &&
            !menuRef3.current.contains(event.target) &&
            menuRef4.current &&
            !menuRef4.current.contains(event.target)

        ) {
            setDropdownOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideMenu);
        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        };
    }, []);

    return (
        <nav className={`bg-gray-800 z-50 shadow-sm fixed top-0 left-0 w-full`}>
            {/* Navbar Container */}
            <div className="w-full mx-auto px-4 lg:px-8">
                <div className="flex flex-col py-0 lg:py-5 lg:flex-row lg:items-center lg:justify-evenly">
                    {/* Navbar Logo */}
                    <div className=" relative left-[10%] lg:left-0 top-6 lg:top-0">
                        <img src={logo} alt="Logo" className="w-12 h-12" />
                    </div>

                    {/* The Menus & Buttons Responsive Design  */}
                    {/* Menu Toggle for Mobile & Tablet Version*/}
                    <div className="relative lg:hidden ">
                        {isMenuOpen ? (
                            <X size={50} className="relative -top-6 left-[80%] text-white cursor-pointer" onClick={handleMenuToggle} />
                        ) : (
                            <Menu size={50} className="relative -top-6 left-[80%]  text-white cursor-pointer" onClick={handleMenuToggle} />
                        )}
                    </div>
                    {/* Check is Navbar Menu Opened, if yes show the menus & the buttons */}
                    {isMenuOpen && (
                        <div className="flex flex-col items-baseline bg-gray-800 py-0 lg:hidden">
                            {/* Beranda Mobile & Tablet Version */}
                            <NavLink
                                to="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 w-full py-5 rounded-md text-xl font-medium"
                            >
                                <span>🏠</span> Beranda
                                {window.scrollTo({ top: 0 })}
                            </NavLink>

                            {/* Profil Mobile & Tablet Version*/}
                            <div className="relative" ref={menuRef1}>
                                <button
                                    onClick={() => handleDropdownToggle(0)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 w-full py-5 rounded-md text-xl flex font-medium focus:outline-none"
                                >
                                    <span>🏰</span> Profil <span className='relative top-2 left-3'><ChevronDown /></span>
                                </button>
                                {isDropdownOpen === 0 && (
                                    <div className="relative bg-gray-800 mt-2 py-2 w-screen rounded-md shadow-md">
                                        <NavLink
                                            to="/tartib"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Tata Tertib
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                        <NavLink
                                            to="/organisasi"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Struktur Organisasi
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                    </div>
                                )}
                            </div>

                            {/* Program Mobile & Tablet Version */}

                            <div className="relative" ref={menuRef2}>
                                <button
                                    onClick={() => handleDropdownToggle(1)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 w-full py-5 rounded-md text-xl flex font-medium focus:outline-none"
                                >
                                    <span>💼</span> Program <span className='relative top-2 left-3'><ChevronDown /></span>
                                </button>
                                {isDropdownOpen === 1 && (
                                    <div className="relative bg-gray-800 mt-2 py-2 w-screen rounded-md shadow-md">
                                        <NavLink
                                            to="/programkerja"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Program Kerja Kepengurusan
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                        <NavLink
                                            to="/siskamling"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Jadwal Siskamling
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                    </div>
                                )}
                            </div>

                            {/* Statistik Mobile & Tablet Version */}
                            <div className="relative" ref={menuRef3}>
                                <button
                                    onClick={() => handleDropdownToggle(2)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 w-full py-5 rounded-md text-xl flex font-medium focus:outline-none"
                                >
                                    <span>📊</span> Statistik <span className='relative top-2 left-3'><ChevronDown /></span>
                                </button>
                                {isDropdownOpen === 2 && (
                                    <div className="relative z-10 bg-gray-800 mt-2 py-2 w-screen rounded-md shadow-md">
                                        <NavLink
                                            to="/statistik-usiawarga"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Usia Warga
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                        <NavLink
                                            to="/statistik-jk"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Jenis Kelamin
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                        <NavLink
                                            to="/statistik-posisi"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Posisi
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                        <NavLink
                                            to="/statistik-status"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Status Perkawinan
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                        <NavLink
                                            to="/statistik-agama"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Agama
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                        <NavLink
                                            to="/statistik-pendidikan"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Pendidikan
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>

                                    </div>
                                )}
                            </div>

                            {/* Berita Mobile & Tablet Version */}
                            <div className="relative" ref={menuRef4}>
                                <button
                                    onClick={() => handleDropdownToggle(3)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 w-full py-5 rounded-md text-xl flex font-medium focus:outline-none"
                                >
                                    <span>📢</span> Informasi <span className='relative top-2 left-3'><ChevronDown /></span>
                                </button>
                                {isDropdownOpen === 3 && (
                                    <div className="relative bg-gray-800 mt-2 py-2 w-screen rounded-md shadow-md">
                                        <NavLink
                                            to="/berita"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Berita
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                        <NavLink
                                            to="/pengumuman"
                                            className="block px-4 py-2 text-gray-300 hover:text-white text-base hover:bg-gray-600"
                                        >
                                            Pengumuman
                                            {window.scrollTo({ top: 0 })}
                                        </NavLink>
                                    </div>
                                )}
                            </div>

                            {/* The Navbar Buttons Mobile Version */}
                            <div className="flex flex-row mt-5 pb-10 justify-center mx-auto">
                                <Link to="/login"><PrimaryButton className="px-32 py-3 md:px-64">Masuk</PrimaryButton></Link>
                            </div>
                        </div>
                    )}


                    {/* Menu Desktop Version */}
                    <div className="hidden items-baseline lg:flex lg:flex-row lg:space-x-10 ">
                        {/* Beranda Desktop Version */}
                        <NavLink
                            to="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 lg:py-2 rounded-md lg:text-lg font-medium"
                        >
                            <span>🏠</span> Beranda
                            {window.scrollTo({ top: 0 })}
                        </NavLink>

                        {/* Profil Desktop Version */}
                        <div className="relative" ref={menuRef1}>
                            <button
                                onClick={() => handleDropdownToggle(0)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-lg flex font-medium "
                            >
                                <span>🏰</span> Profil <span className='relative lg:top-1'><ChevronDown /></span>
                            </button>
                            {isDropdownOpen === 0 && (
                                <div className="lg:absolute z-10 bg-gray-800 mt-2 py-2 w-40 rounded-md shadow-md">
                                    <NavLink
                                        to="/tartib"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Tata Tertib
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                    <NavLink
                                        to="/organisasi"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Struktur Organisasi
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        {/* Program Desktop Version */}
                        <div className="relative" ref={menuRef2}>
                            <button
                                onClick={() => handleDropdownToggle(1)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-lg flex font-medium "
                            >
                                <span>💼</span> Program <span className='relative lg:top-1'><ChevronDown /></span>
                            </button>
                            {isDropdownOpen === 1 && (
                                <div className="lg:absolute z-10 bg-gray-800 mt-2 py-2 w-40 rounded-md shadow-md">
                                    <NavLink
                                        to="/programkerja"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Program Kerja Kepengurusan
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                    <NavLink
                                        to="/siskamling"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Jadwal Siskamling
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        {/* Statistik Desktop Version */}
                        <div className="relative" ref={menuRef3}>
                            <button
                                onClick={() => handleDropdownToggle(2)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-lg flex font-medium "
                            >
                                <span>📊</span> Statistik <span className='relative lg:top-1'><ChevronDown /></span>
                            </button>
                            {isDropdownOpen === 2 && (
                                <div className="lg:absolute z-10 bg-gray-800 mt-2 py-2 w-40 rounded-md shadow-md">
                                    <NavLink
                                        to="/statistik-usiawarga"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Usia Warga
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                    <NavLink
                                        to="/statistik-jk"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Jenis Kelamin
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                    <NavLink
                                        to="/statistik-posisi"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Posisi
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                    <NavLink
                                        to="/statistik-status"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Status Perkawinan
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                    <NavLink
                                        to="/statistik-agama"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Agama
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                    <NavLink
                                        to="/statistik-pendidikan"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Pendidikan
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>

                                </div>
                            )}
                        </div>

                        {/* Berita Desktop Version */}

                        <div className="relative" ref={menuRef4}>
                            <button
                                onClick={() => handleDropdownToggle(3)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-lg flex font-medium "
                            >
                                <span>📢</span> Informasi <span className='relative lg:top-1'><ChevronDown /></span>
                            </button>
                            {isDropdownOpen === 3 && (
                                <div className="lg:absolute z-10 bg-gray-800 mt-2 py-2 w-40 rounded-md shadow-md">
                                    <NavLink
                                        to="/berita"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Berita
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                    <NavLink
                                        to="/pengumuman"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Pengumuman
                                        {window.scrollTo({ top: 0 })}
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        {/* The Navbar Buttons Desktop Version */}
                        <div className='relative left-8'>
                            <Link to="/login"><PrimaryButton className="px-14">Masuk</PrimaryButton></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
