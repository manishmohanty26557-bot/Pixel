import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Cloud from './Cloud';
import StickyNote from './StickyNote';
import PixelGirl from './PixelGirl';
import Dock from './Dock';
import { projectsData, funnyRejectedIdeas } from '../data/mockData';

const Desktop = ({ playSound }) => {
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [showTrash, setShowTrash] = useState(false);

  const handleIconClick = (project) => {
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
    setShowTrash(true);
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

      {/* Desktop Icons */}
      {projectsData.map((project) => (
        <DesktopIcon
          key={project.id}
          project={project}
          onClick={handleIconClick}
        />
      ))}

      {/* Open Windows */}
      {openWindows.map((window) => (
        <Window
          key={window.id}
          project={window}
          zIndex={window.zIndex}
          onClose={() => handleWindowClose(window.id)}
          onFocus={() => handleWindowFocus(window.id)}
          playSound={playSound}
        />
      ))}

      {/* Trash Easter Egg Window */}
      {showTrash && (
        <div className="trash-modal" onClick={handleCloseTrash}>
          <div className="trash-content" onClick={(e) => e.stopPropagation()}>
            <div className="trash-header">
              <h2 className="trash-title">🗑️ Rejected Concepts</h2>
              <button className="trash-close" onClick={handleCloseTrash}>✕</button>
            </div>
            <div className="trash-body">
              <p className="trash-subtitle">Ideas that didn't make the cut...</p>
              <ul className="trash-list">
                {funnyRejectedIdeas.map((idea, idx) => (
                  <li key={idx} className="trash-item">{idea}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Pixel Girl Character */}
      <PixelGirl />

      {/* Dock */}
      <Dock onTrashClick={handleTrashClick} />
    </div>
  );
};

export default Desktop;
