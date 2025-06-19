import About from './Component/About';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AnimatedBlobBackground from './Component/AnimatedBlobBackground';
import { useEffect } from 'react';
import Skills from './Component/Skills';
import Freelance from './Component/Freelance';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollEffect = document.querySelector('.scroll-effect');
      
      if (scrollEffect) {
        // Change opacity based on scroll position
        const opacity = Math.min(0.3, scrollY / 1000);
        scrollEffect.style.opacity = opacity;
        
        // Subtle scale effect
        const scale = 1 + (scrollY / 5000);
        scrollEffect.style.transform = `scale(${scale})`;
      }
      
      // Move blobs slightly - these will be the ones created by AnimatedBlobBackground
      const blobs = document.querySelectorAll('.animated-blob');
      blobs.forEach((blob, index) => {
        const moveY = scrollY * (0.02 + (index * 0.01)) * (index % 2 === 0 ? 1 : -1);
        // Apply translation on top of existing transform styles
        const currentTransform = blob.style.transform || '';
        const hasTranslateY = currentTransform.includes('translateY');
        
        if (hasTranslateY) {
          // Update existing translateY value
          blob.style.transform = currentTransform.replace(/translateY\([^)]+\)/, `translateY(${moveY}px)`);
        } else {
          // Add translateY to existing transform
          blob.style.transform = `${currentTransform} translateY(${moveY}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="app-container">
      {/* Fixed background with gradient - same as your original */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0118] via-[#0f172a] to-[#1e1b4b] -z-20"></div>
      
      {/* Scroll effect overlay - same as your original */}
      <div className="scroll-effect fixed inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-indigo-900/20 origin-top transition-opacity duration-200 -z-10"></div>
      
      {/* Animated blob background with settings to match your original style */}
      <AnimatedBlobBackground 
        blobCount={20}  // Match number in your original code
        color="rgba(99, 102, 241, 0.1)"  // Indigo color to match your theme
        darkColor="rgba(79, 70, 229, 0.05)" 
        blurAmount="40px"
        blobClassName="animated-blob"  // Class needed for scroll effects
        darkMode={true}  // Since you have a dark background
      />
      
      {/* Main content - unchanged from your original */}
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/freelance' element={<Freelance/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> */}
      <Home/>
      <About />
      <Skills/>
      <Freelance/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;