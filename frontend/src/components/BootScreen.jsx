import React, { useState, useEffect, useRef } from 'react';

const BOOT_SEQUENCE = [
  { progress: 0, text: 'Initializing Growth OS...' },
  { progress: 25, text: 'Loading Performance Metrics...' },
  { progress: 50, text: 'Compiling Campaign Data...' },
  { progress: 75, text: 'Optimizing Funnels...' },
  { progress: 100, text: 'Welcome!' }
];

const BootScreen = ({ onBootComplete }) => {
  const [step, setStep] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onBootComplete();
    };

    let current = 0;
    const bootInterval = setInterval(() => {
      current += 1;
      if (current < BOOT_SEQUENCE.length) {
        setStep(current);
      } else {
        clearInterval(bootInterval);
        setTimeout(finish, 250);
      }
    }, 280);

    // Any key or tap skips the boot
    window.addEventListener('keydown', finish);
    window.addEventListener('click', finish);

    return () => {
      clearInterval(bootInterval);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('click', finish);
    };
  }, [onBootComplete]);

  const { progress, text } = BOOT_SEQUENCE[step];

  return (
    <div className="boot-screen" role="status" aria-live="polite">
      <div className="boot-content">
        <img className="boot-logo" src="/favicon.svg" alt="" width="64" height="64" />
        <h1 className="boot-title">Growth OS</h1>
        <div className="boot-progress-container">
          <div
            className="boot-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="boot-text">{text}</p>
        <p className="boot-skip">Tap or press any key to skip</p>
      </div>
    </div>
  );
};

export default BootScreen;
