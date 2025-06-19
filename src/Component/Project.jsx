import React, { useRef, } from 'react'
import { motion, useInView, useAnimationControls, } from 'framer-motion'
import { useEffect } from 'react';
import { span } from 'framer-motion/m';

export default function Project() {
    const slideUpRef1 = useRef(null);
    const slideUpRef2 = useRef(null);
    const slideUpRef3 = useRef(null);

    const slideUpInview1 = useInView(slideUpRef1, { once: true, amount: 0.3 });
    const slideUpInview2 = useInView(slideUpRef2, { once: true, amount: 0.3 });
    const slideUpInview3 = useInView(slideUpRef3, { once: true, amount: 0.3 });

    const slideUpControls1 = useAnimationControls();
    const slideUpControls2 = useAnimationControls();
    const slideUpControls3 = useAnimationControls();

    const transition1 = {
        type: 'spring',
        duration: 1.2,
        delay: 0.1,
        damping: 30,
        stiffness: 150
    };
    const transition2 = {
        type: 'spring',
        duration: 1.2,
        delay: 0.4,
        damping: 30,
        stiffness: 150
    };
    const transition3 = {
        type: 'spring',
        duration: 1.2,
        delay: 0.7,
        damping: 30,
        stiffness: 150
    };

    useEffect(() => {
        if (slideUpInview1) {
            slideUpControls1.start({ y: 0, opacity: 1, transition: transition1 });
        }
    }, [slideUpInview1, slideUpControls1]);

    useEffect(() => {
        if (slideUpInview2) {
            slideUpControls2.start({ y: 0, opacity: 1, transition: transition2 });
        }
    }, [slideUpInview2, slideUpControls2]);

    useEffect(() => {
        if (slideUpInview3) {
            slideUpControls3.start({ y: 0, opacity: 1, transition: transition3 });
        }
    }, [slideUpInview3, slideUpControls3]);

    return (
        <div id='project' className='flex flex-col py-[30px]'>
            <div className='text-center py-[10px]'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-[30px] font-[600] text-white'>Featured Project</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-[19px] font-[500] text-gray-400'>A selection of my recent work </motion.p>
            </div>
            <div className='px-[20px] md:flex md:px-[60px] gap-[2rem]'>
                <motion.div
                    ref={slideUpRef1}
                    initial={{ y: 60, opacity: 0 }}
                    animate={slideUpControls1}
                    className='flex flex-col rounded-[10px] mb-[1rem] md:mb-[0px] border border-gray-600 bg-[#111111]'>
                    <div>
                        <img src="project1.jpg" alt="" className='rounded-t-lg' />
                    </div>
                    <div className='px-[20px] py-[20px]'>
                        <h1 className='text-[17px] font-[500] text-orange-500'>The farm house club</h1>
                        <p className='text-gray-400 text-[16px] font-[500] mb-[0.8rem]'>A full stack web application for investors in the agricultural industry</p>
                        <div className='flex mb-[1.5rem] gap-[6px] md:gap-[5px] items-center text-center'>
                            {
                                ['JSX', 'CSS', 'Javascript', 'Node.js', 'Express.js', 'MongoDB'].map((tech, index) => (
                                    <motion.span

                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className='px-[7px] py-[3px] bg-[#28282b] text-white font-[400] rounded-[20px] text-[11px] md:text-[13px]'
                                    >
                                        {tech}
                                    </motion.span>
                                ))
                            }
                        </div>
                        <a href="https://thegotravels.com/" target="_blank" class=" py-2 px-4 text-orange-500 border border-gray-500 rounded-[5px] mb-[2rem] hover:bg-[#1f110b] duration-300 cursor-pointer">Live &lt;~&gt;</a>
                    </div>
                </motion.div>
                <motion.div
                    ref={slideUpRef2}
                    initial={{ y: 60, opacity: 0 }}
                    animate={slideUpControls2}
                    className='flex flex-col rounded-[10px] border mb-[1rem] md:mb-[0px] border-gray-600 bg-[#111111]'>
                    <div>
                        <img src="project4.jpg" alt="" className='rounded-t-lg' />
                    </div>
                    <div className='px-[20px] py-[20px]'>
                        <h1 className='text-[17px] font-[500] text-orange-500'>The farm house club</h1>
                        <p className='text-gray-400 text-[16px] font-[500] mb-[0.8rem]'>A full stack web application for investors in the agricultural industry</p>
                        <div className='flex mb-[1.5rem] gap-[7px] md:gap-[5px] items-center text-center'>
                            {
                                ['HTML', 'CSS', 'Javascript', 'React', 'Boostrap', 'Node.js'].map((tech, index) => (
                                    <span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}

                                        className='px-[7px] py-[3px] bg-[#28282b] text-white font-[500] md:font-[400] rounded-[20px] text-[11px] md:text-[13px]'
                                    >
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <a href="https://elx-academy.vercel.app/" target="_blank" class=" py-2 px-4 text-orange-500 border border-gray-500 rounded-[5px] mb-[2rem] hover:bg-[#1f110b] duration-300 cursor-pointer">Live &lt;~&gt;</a>
                    </div>
                </motion.div>
                <motion.div
                    ref={slideUpRef3}
                    initial={{ y: 60, opacity: 0 }}
                    animate={slideUpControls3}
                    className='flex flex-col rounded-[6px] border border-gray-600 bg-[#111111]'>
                    <div>
                        <img src="project3.jpg" alt="" className='rounded-t-lg' />
                    </div>
                    <div className='px-[20px] py-[20px]'>
                        <h1 className='text-[17px] font-[500] text-orange-500'>The farm house club</h1>
                        <p className='text-gray-400 text-[16px] font-[500] mb-[0.8rem]'>A full stack web application for investors in the agricultural industry</p>
                        <div className='flex mb-[1.5rem] gap-[7px] md:gap-[5px] items-center text-center'>
                            {
                                ['JSX', 'CSS', 'Javascript', 'React', 'Tailwind.Css', 'Node.js'].map((tech, index) => (
                                    <span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className='px-[7px] py-[3px] bg-[#28282b] text-white font-[400] rounded-[20px] text-[11px] md:text-[13px]'
                                    >
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <a href="https://thefarmhouseclub.io/#/" target="_blank" class=" py-2 px-4 text-orange-500 border border-gray-500 rounded-[5px] mb-[2rem] hover:bg-[#1f110b] duration-300 cursor-pointer">Live &lt;~&gt;</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}