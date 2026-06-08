import React, { useState } from 'react';
import Window from './Window';
import AboutWindow from './AboutWindow';
import ExtracurricularsWindow from './ExtracurricularsWindow';
import FuturePlansWindow from './FuturePlansWindow';
import GrowthGameWindow from './GrowthGameWindow';
import Cloud from './Cloud';
import StickyNote from './StickyNote';
import StatNote from './StatNote';
import SectionBox from './SectionBox';
import Terminal from './Terminal';
import PixelGirl from './PixelGirl';
import Dock from './Dock';
import { 
  internshipsData, 
  aboutLinksData, 
  whatsNextData, 
  statNotesData, 
  dadJokesAboutAI 
} from '../data/mockData';

const Desktop = ({ playSound }) => {
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(100);
  const [showTrash, setShowTrash] = useState(false);
  const [showTrashConfirm, setShowTrashConfirm] = useState(false);

const handleIconClick = (project) => {
  // Handle external links
if (project.isLink && project.url) {
  console.log("CLICKED:", project.url);
  alert("CLICKED: " + project.url);
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
    if (playSound) playSound();
  };

  const handleTrashConfirm = () => {
    setShowTrashConfirm(false);
    setShowTrash(true);
    if (playSound) playSound();
  };

  const handleTrashCancel = () => {
    setShowTrashConfirm(false);
    if (playSound) playSound();
  };

  const handleCloseTrash = () => {
    setShowTrash(false);
    if (playSound) playSound();
  };

  return (
    <div className="desktop">
      {/* Floating Clouds */}
      <Cloud style={{ top: '15%', right: '8%' }} animationDelay={0} />
      <Cloud style={{ top: '35%', right: '20%' }} animationDelay={3} />
      <Cloud style={{ top: '60%', right: '12%' }} animationDelay={6} />

      {/* LEFT ZONE: Floating Stat Notes */}
      <div className="stat-notes-zone">
        {statNotesData.map(stat => (
          <StatNote key={stat.id} stat={stat} />
        ))}
      </div>

      {/* CENTER ZONE: Section Boxes */}
      <div className="sections-zone">
        <SectionBox
          title="My Past Internship Experience"
          subtitle="Where I've driven growth before"
          items={internshipsData}
          onIconClick={handleIconClick}
        />
        <SectionBox
          title="About Me & Quick Links"
          subtitle="Get to know me better"
          items={aboutLinksData}
          onIconClick={handleIconClick}
        />
        <SectionBox
          title="What's Next"
          subtitle="Where I'm headed"
          items={whatsNextData}
          onIconClick={handleIconClick}
        />
      </div>

      {/* RIGHT: Sticky Note */}
      <StickyNote />

      {/* BOTTOM LEFT: Terminal */}
      <Terminal />

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
        } else if (window.type === 'game') {
          return (
            <GrowthGameWindow
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

      {/* Bin Modal */}
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
          id: 'about-me-from-girl',
          type: 'about',
          title: 'About Me'
        };
        handleIconClick(futurePlan);
      }} />

      {/* Trash Dock */}
      <Dock onTrashClick={handleTrashClick} />
    </div>
  );
};

export default Desktop;
