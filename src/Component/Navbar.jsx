import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoIosMenu } from "react-icons/io";
import { BiAnchor } from 'react-icons/bi';
import { FiMoon } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex fixe w-[100%] justify-between items-center text-white sticky top-0 z-50 bg-[#0f172a]/60 backdrop-blur-md backdrop-filter px-10 py-2 shadow-md border-b border-[#1e1b4b]/30'>

            <div className='flex items-center gap-[10px] w-[50%]'>
                {/* <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-md">
                    VC
                </div> */}
                <div className='flex items-center'>
                    <h1 className='flex text-[25px] font-[600] text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                        Victor.
                    </h1>
                    <span className='text-[20px] font-[500]'>Dev</span>
                </div>
            </div>

            <ul className='hidden md:flex gap-[2rem] cursor-pointer'>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link' href='#home'>Home</AnchorLink>
                </li>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink>
                </li>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink>
                </li>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link' offset={50} href='#freelance'>Freelance</AnchorLink>
                </li>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link'offset={50} href='#project'>Project</AnchorLink>
                </li>
                <li className='hover:text-orange-500'>
                    <AnchorLink className='anchor-link'offset={50} href='#contact'>Contact</AnchorLink>
                </li>
            </ul>
           <div className=''>
             <img src="big.jpg" alt="" className='hidden md:block md:w-[50px] h-[50px] rounded-[40px] object-cover '/>
           </div>
           <IoIosMenu className='font-[500] text-[30px] md:hidden' />
        </nav>
    )
}
