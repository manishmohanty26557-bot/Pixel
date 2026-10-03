import React, { useState, useEffect } from 'react';
import { contactLinks } from '../data/mockData';

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Only minutes are shown, so tick on the minute boundary
    let interval;
    const timeout = setTimeout(() => {
      setCurrentTime(new Date());
      interval = setInterval(() => setCurrentTime(new Date()), 60000);
    }, 60000 - (Date.now() % 60000));

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <header className="menu-bar">
      <div className="menu-bar-left">
        <img className="menu-logo" src="/favicon.svg" alt="" width="18" height="18" />
        <span className="menu-item menu-name">Manish Mohanty</span>
      </div>
      <nav className="menu-bar-right" aria-label="Menu">
        <a className="menu-item menu-link" href={contactLinks.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        <time className="menu-item menu-clock" dateTime={currentTime.toISOString()}>{formatTime(currentTime)}</time>
      </nav>
    </header>
  );
};

export default MenuBar;
