import React, { useState, useRef, useCallback } from 'react';
import BootScreen from '../components/BootScreen';
import MenuBar from '../components/MenuBar';
import Desktop from '../components/Desktop';

const BOOT_KEY = 'growth-os-booted';

// Boot once per browser session; skip it for reduced-motion users
const shouldBoot = () => {
  try {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
    return !window.sessionStorage.getItem(BOOT_KEY);
  } catch {
    return true;
  }
};

const Portfolio = () => {
  const [isBooting, setIsBooting] = useState(shouldBoot);
  const audioRef = useRef(null);

  const handleBootComplete = useCallback(() => {
    try {
      window.sessionStorage.setItem(BOOT_KEY, '1');
    } catch {
      // storage unavailable; boot will just replay next time
    }
    setIsBooting(false);
  }, []);

  const playSound = useCallback(() => {
    // Created on first interaction so the mp3 isn't fetched on page load
    if (!audioRef.current) audioRef.current = new Audio('/assets/window-sound.mp3');
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }, []);

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
