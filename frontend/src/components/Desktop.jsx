import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import AboutWindow from './AboutWindow';
import ExtracurricularsWindow from './ExtracurricularsWindow';
import FuturePlansWindow from './FuturePlansWindow';
import Cloud from './Cloud';
import StickyNote from './StickyNote';
import PixelGirl from './PixelGirl';
import Dock from './Dock';
import { projectsData, dadJokesAboutAI } from '../data/mockData';

const Desktop = ({ playSound }) => {
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [showTrash, setShowTrash] = useState(false);
  const [showTrashConfirm, setShowTrashConfirm] = useState(false);

  const handleIconClick = (project) => {
    // Handle external links
    if (project.isLink && project.url) {
      window.open(project.url, '_blank');
      if (playSound) playSound();
      return;
    }

    // Check if window is already open
    if (openWindows.find(w => w.id === project.id)) {
      return;
    }

    const newWindow = {
      ...project,
      zIndex: highestZIndex + 1
    };

    setOpenWindows([...openWindows, newWindow]);
    setHighestZIndex(highestZIndex + 1);
    if (playSound) playSound();
  };

  const handleWindowClose = (projectId) => {
    setOpenWindows(openWindows.filter(w => w.id !== projectId));
  };

  const handleWindowFocus = (projectId) => {
    const newZIndex = highestZIndex + 1;
    setOpenWindows(openWindows.map(w => 
      w.id === projectId ? { ...w, zIndex: newZIndex } : w
    ));
    setHighestZIndex(newZIndex);
  };

  const handleTrashClick = () => {
    setShowTrashConfirm(true);
    if (playSound) {
      playSound();
    }
  };

  const handleTrashConfirm = () => {
    setShowTrashConfirm(false);
    setShowTrash(true);
    if (playSound) {
      playSound();
    }
  };

  const handleTrashCancel = () => {
    setShowTrashConfirm(false);
    if (playSound) {
      playSound();
    }
  };

  const handleCloseTrash = () => {
    setShowTrash(false);
    if (playSound) {
      playSound();
    }
  };

  return (
    <div className="desktop">
      {/* Floating Clouds */}
      <Cloud style={{ top: '15%', left: '10%' }} animationDelay={0} />
      <Cloud style={{ top: '25%', right: '15%' }} animationDelay={3} />
      <Cloud style={{ top: '40%', left: '20%' }} animationDelay={6} />

      {/* Sticky Note */}
      <StickyNote />

      {/* Row Labels */}
      <div className="row-label" style={{ top: '55px', left: '40px' }}>
        <span className="row-label-text">▸ Growth Plans for Thine & Merlin AI</span>
        <span className="row-label-subtext">This is what I will do for you, from Day 1</span>
      </div>
      <div className="row-label" style={{ top: '235px', left: '40px' }}>
        <span className="row-label-text">▸ My Past Internship Experience</span>
        <span className="row-label-subtext">Where I've driven growth before</span>
      </div>
      <div className="row-label" style={{ top: '415px', left: '40px' }}>
        <span className="row-label-text">▸ About Me & Quick Links</span>
        <span className="row-label-subtext">Get to know me better</span>
      </div>

      {/* Desktop Icons */}
      {projectsData.map((project) => (
        <DesktopIcon
          key={project.id}
          project={project}
          onClick={handleIconClick}
        />
      ))}

      {/* Open Windows */}
      {openWindows.map((window) => {
        if (window.type === 'about') {
          return (
            <AboutWindow
              key={window.id}
              zIndex={window.zIndex}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        } else if (window.type === 'extra') {
          return (
            <ExtracurricularsWindow
              key={window.id}
              zIndex={window.zIndex}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        } else if (window.type === 'future') {
          return (
            <FuturePlansWindow
              key={window.id}
              zIndex={window.zIndex}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        } else {
          return (
            <Window
              key={window.id}
              project={window}
              zIndex={window.zIndex}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        }
      })}

      {/* Trash Confirmation Dialog */}
      {showTrashConfirm && (
        <div className="trash-modal" onClick={handleTrashCancel}>
          <div className="trash-content trash-confirm" onClick={(e) => e.stopPropagation()}>
            <div className="trash-header">
              <h2 className="trash-title">🗑️ Pakka?</h2>
              <button className="trash-close" onClick={handleTrashCancel}>✕</button>
            </div>
            <div className="trash-body">
              <p className="trash-confirm-text">Are you sure about it?</p>
              <div className="trash-confirm-buttons">
                <button className="trash-btn trash-btn-yes" onClick={handleTrashConfirm}>
                  Haan, Dikhao!
                </button>
                <button className="trash-btn trash-btn-no" onClick={handleTrashCancel}>
                  Nahi Nahi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dad Jokes Modal */}
      {showTrash && (
        <div className="trash-modal" onClick={handleCloseTrash}>
          <div className="trash-content" onClick={(e) => e.stopPropagation()}>
            <div className="trash-header">
              <h2 className="trash-title">Bin</h2>
              <button 
                className="trash-close" 
                onClick={handleCloseTrash}
                data-testid="close-dad-jokes"
              >
                ✕
              </button>
            </div>
            <div className="trash-body">
              <p className="bin-context">This is what My Dad thinks about AI 😄</p>
              <ul className="trash-list">
                {dadJokesAboutAI.map((joke, idx) => (
                  <li key={idx} className="trash-item">{joke}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Pixel Girl Character - Now Clickable */}
      <PixelGirl onClick={() => {
        const futurePlan = {
          id: 'future-plans',
          type: 'future',
          title: 'What\'s Next for Manish'
        };
        handleIconClick(futurePlan);
      }} />

      {/* Dock */}
      <Dock onTrashClick={handleTrashClick} />
    </div>
  );
};

export default Desktop;
