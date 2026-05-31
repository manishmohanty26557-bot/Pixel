import React, { useState, useEffect } from 'react';

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="menu-bar">
      <div className="menu-bar-left">
        <span className="menu-item apple-logo">🍎</span>
        <span className="menu-item font-bold">Manish Mohanty</span>
      </div>
      <div className="menu-bar-right">
        <span className="menu-item">{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default MenuBar;
