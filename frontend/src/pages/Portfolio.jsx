import React, { useState, useEffect, useRef } from 'react';
import BootScreen from '../components/BootScreen';
import MenuBar from '../components/MenuBar';
import Desktop from '../components/Desktop';

const Portfolio = () => {
  const [isBooting, setIsBooting] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload audio
    audioRef.current = new Audio('/assets/window-sound.mp3');
  }, []);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
  };

  if (isBooting) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return (
    <div className="portfolio-container">
      <MenuBar />
      <Desktop playSound={playSound} />
    </div>
  );
};

export default Portfolio;
