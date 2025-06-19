import React from 'react'

export default function About() {
    return (
        <div id='about' className=' top-0 z-50 bg-[#0f172a]/20 backdrop-blur-md backdrop-filter shadow-md border-b border-[#1e1b4b]/30 px-[30px] md:px-[70px] md:py-[20px]'>
            <div className='text-center py-[10px] mb-[1rem]'>
                <h1 className='text-[28px] md:text-[40px] text-white md:font-[700]'>About Me</h1>
                <p className='text-[17px] font-[500] md:text-[23px] text-gray-500 md:font-[600]'>Turning ideas into scalable, intuitive, and impactful digital experiences.</p>
            </div>
            <div>
                <h2 className='md:text-[18px] leading-[25px] font-[500] text-gray-400 mb-[0.7rem] md:mb-[2rem]'>Hi, I’m Victor — a passionate Front-End Developer based in Anambra State, Nigeria. I'm a self-taught developer who specializes in building responsive, user-friendly websites from scratch. My goal is to transform creativity and technical skills into modern web experiences that are both visually appealing and functionally robust.</h2>
                <p className='md:text-[18px] leading-[25px] font-[500] text-gray-400  mb-[0.7rem] md:mb-[2rem]'>Over the years, I’ve helped various clients establish a strong online presence by designing and developing websites tailored to their needs. My work focuses on creating clean, responsive, and accessible interfaces that engage users and drive results.</p>
                <p className='md:text-[18px] leading-[25px] font-[500] text-gray-400 mb-[1rem]'>I'm continuously learning and staying up to date with the latest technologies and frameworks in the front-end ecosystem. This drive for growth pushes me to take on new challenges, explore better ways to build, and deliver exceptional results.</p>
                <p className='md:text[18px]leading-[25px] font-[500] text-gray-400'>Whether it’s working with individuals, startups, or businesses, I’m excited about opportunities to bring ideas to life through code.</p>
            </div>
            <div className='flex text-center py-[1.5rem] ml-[3rem] gap-[1rem] l-[3rem] md:ml-[30rem] md:py-[2rem] md:gap-[2rem]'>
                <button className='px-[10px] py-[3px] md:px-[20px] md:py-[5px] bg-[#6d28d9] rounded-[5px] hover:scale-105 transition-transform duration-400 text-white md:font-[500]'>View Resume</button>
                <button className='px-[10px] py-[3px] md:px-[20px] md:py-[5px] bg-[#ea580c] rounded-[5px] hover:scale-105 transition-transform duration-400 text-white md:font-[500]'>Download Resume</button>
            </div>
        </div>
    )
}
