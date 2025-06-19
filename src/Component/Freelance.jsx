import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

export default function Freelance() {
  const slideDownRef = useRef(null);
  const slideRightRef = useRef(null);

  const slideDownInview = useInView(slideDownRef, { once: true, amount: 0.3 });
  const slideRightInview = useInView(slideRightRef, { once: true, amount: 0.3 });

  const slideDownControls = useAnimationControls();
  const slideRightControls = useAnimationControls();

  // Slower, smoother transition settings
  const transition = {
    type: 'spring',
    duration: 1.2,
    delay: 0.2,
    damping: 30,
    stiffness: 150
  };

  const staggerTransition = {
    type: 'spring',
    duration: 1.4,
    delay: 0.6,
    damping: 30,
    stiffness: 150
  };

  useEffect(() => {
    if (slideDownInview) {
      slideDownControls.start({ 
        y: 0, 
        opacity: 1,
        transition: transition
      });
    }
  }, [slideDownInview, slideDownControls]);

  useEffect(() => {
    if (slideRightInview) {
      slideRightControls.start({ 
        x: 0, 
        opacity: 1,
        transition: staggerTransition
      });
    }
  }, [slideRightInview, slideRightControls]);

  return (
    <div id='freelance' className='flex flex-col px-4 md:px-12 lg:px-16 bg-[#0a0118]/10 backdrop-blur-md backdrop-filter py-10 shadow-md'>
      <div className='text-center mb-8 py-5'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'
        >
          Freelance Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-lg md:text-xl text-gray-400 font-medium'
        >
          Delivering high-impact client projects with precision and creativity
        </motion.p>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Main Project Card */}
        <motion.div
          ref={slideDownRef}
          initial={{ y: -50, opacity: 0 }}
          animate={slideDownControls}
          className='rounded-lg w-full lg:w-1/2 bg-[#09090b] flex flex-col border border-gray-600 overflow-hidden shadow-xl'
        >
          <div className='relative'>
            <video 
              src='/thecordialsgroup.mp4' 
              controls 
              poster='/vid.png' 
              className='w-full h-auto shadow-lg'
              preload="metadata"
              loading="lazy"
            />
          </div>
          
          <div className='p-6 flex flex-col flex-grow'>
            <div className='text-center mb-4'>
              <h2 className='text-2xl font-semibold text-[#ea580c] mb-2'>
                The Cordials Group
              </h2>
            </div>
            
            <div className='flex flex-col gap-4 mb-6'>
              <p className='text-gray-400 leading-relaxed text-base font-medium'>
                The Cordials Group needed a digital presence that matched their premium hospitality service offerings. As a leading staffing agency for high-end events, they required a website that would convey professionalism, elegance, and reliability to potential clients.
              </p>
              <p className='text-gray-400 leading-relaxed text-base font-medium'>
                I designed and developed a sophisticated digital platform that showcases their extensive expertise in providing exceptional staff for weddings, corporate functions, private parties, and exclusive events throughout the United Kingdom. The seamless interface prioritizes client conversion while emphasizing their reputation for excellence.
              </p>
            </div>
            
            <div className='flex flex-wrap gap-2 mb-6'>
              {['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='px-[10px] md:px-4 md:py-2 text-[12px] md:text-[15px] font-medium rounded-full bg-[#1f110b] text-[#ea580c] border border-[#ea580c]/20'
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className='text-center mt-auto'>
              <motion.a 
                href="https://www.thecordialsgroup.co.uk/" 
                target='_blank'
                rel=""
                whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                className='inline-block px-6 py-3 text-base font-medium text-white rounded-full bg-[#ea580c] transition-colors duration-200 shadow-lg'
              >
                Visit Website
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Side Information Cards */}
        <motion.div 
          ref={slideRightRef}
          initial={{ x: 50, opacity: 0 }}
          animate={slideRightControls}
          className='flex flex-col w-full lg:w-1/2 gap-6'
        >
          <motion.div 
            className="bg-[#111111] border border-gray-600 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.4 } }}
          >
            <h3 className="text-orange-500 font-semibold mb-4 text-lg">Client Objectives</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Establish a professional online presence for hospitality staffing services
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Showcase the company's services and staff expertise
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Create an intuitive interface for potential clients to request services
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Design a modern, responsive website that reflects their premium brand
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-[#111111] border border-gray-600 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-orange-500 font-semibold mb-4 text-lg">My Contribution</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                End-to-end responsive website design and development
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Integration of contact forms and service request system
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Performance optimization ensuring fast loading times
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Deployment and configuration on live production servers
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-[#111111] text-white border border-gray-600 p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-orange-500 font-semibold mb-4 text-lg">Client Testimonial</h3>
            <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-300 italic leading-relaxed">
              "Victor delivered exactly what our business needed – a professional, modern website that showcases our services perfectly. The responsive design works beautifully across all devices, and we've already seen an increase in client inquiries. Highly recommended!"
            </blockquote>
            <p className="mt-4 text-sm text-gray-400 italic">— CEO, The Cordials Group</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}