import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col justify-between items-center py-[25px]'>
            <div className='flex items-center mb-[0.5rem]'>
                <h1 className=' text-[25px] font-[600]  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>Victor.</h1>
                <span className='font-[500] text-[18px] text-white mt-[0.3rem]'>Dev</span>
            </div>
            <p className='text-gray-200'>© 2025 Victor Udeolisa. All rights reserved.</p>
        </div>
    )
}
