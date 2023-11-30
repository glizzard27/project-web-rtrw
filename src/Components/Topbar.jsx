import React from 'react'
import BackNavButton from './BackNavButton'

const Topbar = ({ className, children }) => {
    return (
        <header className={`block fixed w-full py-5 bg-blue-500 font-poppins  ${className}`}>
            <div className='relative flex flex-row items-center left-[5%] md:left-[10%] '>
                <BackNavButton />
                {/* Topbar Name */}
                <div className='text-white text-lg font-medium px-5 text-center md:text-start md:text-2xl'>
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Topbar