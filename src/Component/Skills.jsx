import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from "framer-motion"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
export default function Slider() {

  const slideDownRef1 = useRef(null);
  const slideDownRef2 = useRef(null);
  const slideRightRef = useRef(null);

  const slideDownInview1 = useInView(slideDownRef1, { once: true, amount: 0.3 });
  const slideDownInview2 = useInView(slideDownRef2, { once: true, amount: 0.3 });
  const slideRightInview = useInView(slideRightRef, { once: true, amount: 0.3 })

  const slideDownControls1 = useAnimationControls();
  const slideDownControls2 = useAnimationControls();
  const slideRightControls = useAnimationControls();

  const transition1 = {
    type: 'spring',
    duration: 1.2,
    delay: 0,
    damping: 30,
    stiffness: 150
  };

  const transition2 = {
    type: 'spring',
    duration: 1.2,
    delay: 0.3,
    damping: 30,
    stiffness: 150
  };

  const transitionTcker = {
    type: 'spring',
    duration: 1.4,
    delay: 0.5,
    damping: 30,
    stiffness: 150
  }

  useEffect(() => {
    if (slideRightInview) {
      slideRightControls.start({ x: 0, opacity: 1, transition: transitionTcker });
    }
  }, [slideRightInview, slideRightControls]);

  useEffect(() => {
    if (slideDownInview1) {
      slideDownControls1.start({ y: 0, opacity: 1, transition: transition1 });
    }
  }, [slideDownInview1, slideDownControls1]);

  useEffect(() => {
    if (slideDownInview2) {
      slideDownControls2.start({ y: 0, opacity: 1, transition: transition2 });
    }
  }, [slideDownInview2, slideDownControls2]);

  return (
    <div id='skills' className=' md:flex flex-col md:px-[50px] md:py-[40px] md:w-full'>
      <motion.div
        ref={slideRightRef}
        initial={{ x: 20, opacity: 0 }}
        animate={slideRightControls}

        className='text-center mb-[3rem]'>
        <h1 className='text-[30px] font-[700] text-white '>My Skills</h1>
        <p className='text-[20px] text-gray-300'>The technologies and tools I work with</p>
      </motion.div>
      <div className=':flex flex-col bg-[#0a0118]/40 backdrop-blur-md backdrop-filter md:px-[20px] md:py-10  shadow-md rounded-[5px] border border-white/20'>
        <motion.div
          ref={slideDownRef1}
          initial={{ y: -50, opacity: 0 }}
          animate={slideDownControls1}

          className='grid grid-cols-2 gap-4 px-[16px] md:px-[20px] py-[13px] md:flex md:gap-[1rem] md:mb-[1rem]'>
          <div className='flex-col gap-[3px] text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <FaHtml5 className='text-[#ff4800] text-[40px] mx-auto' />
            <h1 className='text-white font-[500]'>HTML</h1>
          </div>

          <div className='flex-col text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <IoLogoCss3 className='text-[#4632fa] text-[40px] mx-auto' />
            <h1 className='text-white text-[20px] font-[500]'>CSS</h1>
          </div>

          <div className='flex-col text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <RiTailwindCssFill className='text-[#06b6d4] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>Tailwind CSS</h1>
          </div>

          <div className='flex-col text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <RiJavascriptFill className='text-[#f7df1e] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>Javascript</h1>
          </div>

          <div className='flex-col text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <BiLogoTypescript className='text-[#3178c6] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>TypeScript</h1>
          </div>

          <div className='flex-col text-center md:w-1/6 md:min-w-[90px] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <FaReact className='text-[#ff4800] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>React</h1>
          </div>
        </motion.div >
        <motion.div
          ref={slideDownRef2}
          initial={{ y: -50, opacity: 0 }}
          animate={slideDownControls2}
          className='grid grid-cols-2 px-[20px] mb-[1rem] md:flex md:px-[25px] gap-[1rem]'>
          <div className='flex-col text-center md:w-[15.6%] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <RiNextjsLine className='text-[#61dafb] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>Next.js</h1>
          </div>

          <div className='flex-col text-center md:w-[15.6%] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <FaVuejs className='text-[#764abc] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>Vue.js</h1>
          </div>
          <div className='flex-col text-center md:w-[15.6%] py-[8px] border border-gray-700 rounded-[5px] hover:scale-105 transform-transition duration-400'>
            <FaNode className='text-[#764abc] text-[40px] mx-auto' />
            <h1 className='text-white text-[16px] font-[500]'>Node.js</h1>
          </div>

        </motion.div>

      </div>
    </div>
  )
}
