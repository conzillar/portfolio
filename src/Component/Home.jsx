import React, { useState, useEffect, useRef } from 'react';

// Custom hook for Intersection Observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, options]);

  return [ref, isInView];
};

// Reusable SlideUp component
const SlideUp = ({ children, delay = 0, duration = 600, className = "" }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default function HeroSection() {
    return (
        <div id='home' className='flex flex-col px-[30px] py-[50px] gap-[1rem] md:flex-row min-h-screen md:px-[90px] md:py-[70px] md:gap-[10rem] items-center md:leading-[50px] bg-gray-900'>
            
            {/* Left Content Section */}
            <div className='md:w-[50%]'>
                {/* Main Heading */}
                <SlideUp delay={0} duration={800}>
                    <h1 className='text-[25px] font-[500] md:text-[37px] md:font-[700] text-white'>
                        Hello, I'm <span className='text-[orange]'>Victor Chukwudi,</span>
                    </h1>
                </SlideUp>

                {/* Sub Heading */}
                <SlideUp delay={200} duration={800}>
                    <h2 className='text-[25px] font-[500] md:text-[37px] text-white md:font-[700] md:mb-[1rem]'>
                        Front End <span className='text-[#6d28d9] font-[500]'>Developer</span>
                    </h2>
                </SlideUp>

                {/* First Paragraph */}
                <SlideUp delay={400} duration={800}>
                    <p className='text-gray-400 leading-[23px] text-[17px] font-[500] md:text-[22px] text-left md:font-[600] mb-[1rem]'>
                        Transforming ideas into elegant digital solutions. I craft seamless web experiences that bridge creativity and functionality.
                    </p>
                </SlideUp>

                {/* Second Paragraph */}
                <SlideUp delay={600} duration={800}>
                    <p className='text-gray-400 leading-[23px] text-[17px] font-[500] md:leading-[30px] md:text-[20px] md:font-[600]'>
                        My journey in tech is driven by curiosity and a passion for solving complex problems with clean, efficient code. Every line I write is a step toward creating something meaningful.
                    </p>
                </SlideUp>

                {/* Contact Button */}
                <SlideUp delay={800} duration={800}>
                    <button 
                        className='px-[100px] w-[100%] md:w-[40%] py-[10px] md:py-[2px] md:px-[30px] md:mb-[15px] mt-[1rem] mb-[0.5rem] items-center cursor-pointer hover:bg-[#ff5100e0] transition-all duration-800 ease-in-out md:mt-[1rem] border border-gray-700 rounded-[5px] bg-[black] text-white'
                        // onClick={() => {
                        //     const contactSection = document.getElementById('contact');
                        //     if (contactSection) {
                        //         contactSection.scrollIntoView({ behavior: 'smooth' });
                        //     }
                        // }}
                    >
                        Contact Me
                    </button>
                </SlideUp>

                {/* Social Media Icons */}
                <SlideUp delay={1000} duration={800}>
                    <div className='flex text-white gap-[20px] text-[22px]'>
                        <div className='px-[10px] py-[10px] rounded-[5px] cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-in-out'>
                            <a href="https://github.com/conzillar" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <div className='px-[10px] py-[10px] rounded-[5px] cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-in-out'>
                            <a href="https://linkedin.com/in/chukwudivictor" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                        <div className='px-[10px] py-[10px] rounded-[5px] cursor-pointer hover:bg-amber-700 transition-all duration-300 ease-in-out'>
                            <a href="mailto:chukwudivictor001@gmail.com" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.002L12 10.09l10.362-6.269h.002c.904 0 1.636.732 1.636 1.636z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </SlideUp>
            </div>

            {/* Right Image Section */}
            <SlideUp delay={300} duration={1000} className='md:w-[50%]'>
                <div className='transition-all duration-500 hover:scale-105'>
                    <img 
                        src="pro2.jpg" 
                        alt="Victor Chukwudi - Frontend Developer" 
                        className='md:w-220 h-100 md:h-118 object-cover rounded-[10px]' 
                    />
                </div>
            </SlideUp>
        </div>
    )
}