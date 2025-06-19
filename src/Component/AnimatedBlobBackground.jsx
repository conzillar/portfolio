import { useEffect, useRef, useState } from 'react';

const AnimatedBlobBackground = ({ 
  blobCount = 20, 
  color = 'rgba(79, 70, 229, 0.1)', 
  darkColor = 'rgba(79, 70, 229, 0.05)',
  blurAmount = '40px',
  children,
  className = '',
  blobClassName = '',
  darkMode = false
}) => {
  const containerRef = useRef(null);
  const [blobs, setBlobs] = useState([]);
  
  useEffect(() => {
    // Generate random blobs on component mount
    const newBlobs = [];
    
    for (let i = 0; i < blobCount; i++) {
      newBlobs.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        width: 80 + Math.random() * 240,
        height: 80 + Math.random() * 240,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5
      });
    }
    
    setBlobs(newBlobs);
  }, [blobCount]);
  
  return (
    <div className={`relative ${className}`}>
      {/* Background container */}
      <div className="fixed inset-0 -z-10 bg-background transition-colors duration-500">
        <div className="absolute inset-0 overflow-hidden" ref={containerRef}>
          {blobs.map((blob) => (
            <div
              key={blob.id}
              className={`absolute rounded-full ${blobClassName}`}
              style={{
                top: `${blob.top}%`,
                left: `${blob.left}%`,
                width: `${blob.width}px`,
                height: `${blob.height}px`,
                backgroundColor: darkMode ? darkColor : color,
                filter: `blur(${blurAmount})`,
                opacity: 0.5,
                animation: `${blob.duration}s ease-in-out ${blob.delay}s infinite normal none running float`,
                willChange: 'transform', // Performance optimization
                transition: 'transform 0.2s ease-out' // For smooth scroll effects
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(2%, 2%) scale(1.03);
            }
            66% {
              transform: translate(-1%, 1%) scale(0.97);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }
        `
      }} />
    </div>
  );
};

export default AnimatedBlobBackground;