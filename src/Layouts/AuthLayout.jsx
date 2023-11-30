import React from 'react'

const AuthLayout = ({ className, children }) => {
    return (
        <div className={`h-screen pt-10 font-poppins flex justify-center items-center ${className}`}>
            <div className="max-w-xl shadow-2xl rounded-xl border p-8 bg-white">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout