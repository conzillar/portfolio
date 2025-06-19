import React, { useEffect, useRef } from 'react'
import {motion, useInView, useAnimationControls} from 'framer-motion'
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {

        const slideDownRef = useRef(null);
        const slideLeftRef = useRef(null);

        const slideDownInview = useInView(slideDownRef, {once: true, amount: 0.3});
        const slideLeftInview = useInView(slideLeftRef, { once: true, amount: 0.3});

        const slideDownControls = useAnimationControls();
        const slideLeftControls = useAnimationControls();

        const transition = {
            type: 'spring',
            duration: 1.2,
            delay: 0,
            damping: 30,
            stiffness: 150
        };

        const staggerTransition = {
            type: 'spring',
            duration: 1.4,
            delay: 0.5,
            damping: 30,
            stiffness: 150
        };

        useEffect(() =>{
            if (slideDownInview){
                slideDownControls.start({
                    y: 0,
                    opacity: 1,
                    transiton: transition
                });
            }
        }, [slideDownInview, slideDownControls]);

        useEffect(() => {
            if(slideLeftInview){
                slideLeftControls.start({
                   x: 0,
                   opacity: 1,
                   transition: staggerTransition 
                });
            }
        }, [slideLeftInview, slideLeftControls]);

    return (
        <div id='contact' className=' flex flex-col  px-[50px] bg-[#0a0118]/10 backdrop-blur-md backdrop-filter py-10 border border-b-gray-400  shadow-md'>
            <div className='text-center'>
                <motion.h1
                initial={{opacity: 0, y:-20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{ once: true}}

                className='text-[32px] text-white font-[600]'>Get In Touch</motion.h1>
                <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.6, delay: 0.2}}
                viewport={{ once: true}}

                className='text-[17px] text-gray-400 font-[500] mb-[1rem]'>Have a project in mind? Lets work together!</motion.p>
            </div>
            <div className='md:flex items-center'>
                <motion.div
                ref={slideDownRef}
                initial={{ y:-50, opacity: 0}}
                animate={slideDownControls}

                className=' md:w-[60%]'>
                    <h1 className=' text-[23px] text-orange-500 font-[500]'>Contact Information</h1>
                    <p className='md:w-[75%] text-gray-400 md:text-[20px] font-[500] '>Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    <div className='flex flex-col'>
                        <h1 className='text-[23px] font-[500] text-orange-500 mb-[0.3rem]'>Let's Connect</h1>
                        <div className='flex gap-[0.6rem]'>
                            <a href="https://discord.com/channels/@me" target='_blank'>
                                <RxDiscordLogo className='text-[25px] text-white hover:text-orange-500 duration-200' />
                            </a>
                            <a href="https://www.instagram.com/?hl=en" target='_blank'>
                                <FaInstagram className='text-[25px] text-white hover:text-orange-500 duration-200' />
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                ref={slideLeftRef}
                initial={{ x: -50, opacity: 0}}
                animate={slideLeftControls}

                className=' flex flex-col md:w-[30%] mt-[10px] gap-[1rem] rounded-[5px] border border-gray-500 bg-[#111111] px-[30px] py-[20px] text-center'>
                    <div className='flex items-center gap-[1rem]'>
                        <AiOutlineMail className='text-orange-500 text-[28px]' />
                        <a href="chukwudivictor001@gmail.com" target='_blank' className='text-white text-[15px] hover:text-orange-500'>chukwudivictor001@gmail.com </a>
                    </div>
                    <div className='flex items-center gap-[1rem]'>
                        <MdOutlineCall className='text-orange-500 text-[27px]' />
                        <a href="+2347058133544" target='_blank' className='text-white text-[17px] hover:text-orange-500'>+234-7058133544 </a>
                    </div>
                    <div className='flex items-center gap-[1rem]'>
                        <LuGithub className='text-orange-500 text-[20px] ' />
                        <a href="https://github.com/conzillar" target='_blank' className='text-white hover:text-orange-500'>https://github.com/conzillar</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
