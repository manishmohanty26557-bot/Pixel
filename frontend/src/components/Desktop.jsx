import React, { useState, useRef, useEffect } from 'react';
import Window from './Window';
import AboutWindow from './AboutWindow';
import ExtracurricularsWindow from './ExtracurricularsWindow';
import FuturePlansWindow from './FuturePlansWindow';
import GrowthGameWindow from './GrowthGameWindow';
import ViralContentWindow from './ViralContentWindow';
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
  projectsData,
  dadJokesAboutAI,
  aboutData,
  contactLinks,
  emailComposeUrl
} from '../data/mockData';

const Desktop = ({ playSound }) => {
  const [openWindows, setOpenWindows] = useState([]);
  const [showTrash, setShowTrash] = useState(false);
  const [showTrashConfirm, setShowTrashConfirm] = useState(false);

  const zRef = useRef(100);
  const nextZ = () => {
    // Keep windows below the menu bar and modals
    zRef.current = zRef.current >= 800 ? 101 : zRef.current + 1;
    return zRef.current;
  };

  const handleWindowFocus = (projectId) => {
    const z = nextZ();
    setOpenWindows(ws => ws.map(w => (w.id === projectId ? { ...w, zIndex: z } : w)));
  };

  const handleIconClick = (project) => {
    // External links are real <a target="_blank"> elements
    if (project.isLink) return;

    if (openWindows.some(w => w.id === project.id)) {
      handleWindowFocus(project.id);
      return;
    }

    const z = nextZ();
    setOpenWindows(ws => (ws.some(w => w.id === project.id)
      ? ws
      : [...ws, { ...project, zIndex: z, cascade: ws.length % 5 }]));
    if (playSound) playSound();
  };

  const openById = (id) => {
    const project = projectsData.find(p => p.id === id);
    if (project) handleIconClick(project);
  };

  const handleWindowClose = (projectId) => {
    setOpenWindows(ws => ws.filter(w => w.id !== projectId));
  };

  // Escape closes the bin dialogs first, then the top-most window
  const binOpenRef = useRef(false);
  binOpenRef.current = showTrash || showTrashConfirm;
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (binOpenRef.current) {
        setShowTrash(false);
        setShowTrashConfirm(false);
        return;
      }
      setOpenWindows(ws => {
        if (!ws.length) return ws;
        const top = ws.reduce((a, b) => (b.zIndex > a.zIndex ? b : a));
        return ws.filter(w => w.id !== top.id);
      });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // On phones, a tap on empty desktop dismisses windows. Uses click (not
  // touchstart) so scrolling doesn't close them.
  const handleDesktopClick = (event) => {
    if (typeof window === 'undefined' || !window.matchMedia('(max-width: 767px), (max-height: 500px) and (max-width: 1023px), (max-width: 1023px) and (orientation: portrait)').matches) return;
    if (!openWindows.length) return;
    if (event.target.closest('.window, a, button, .desktop-icon, .pixel-girl-container')) return;
    setOpenWindows([]);
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
    <main className="desktop" onClick={handleDesktopClick} aria-label="Desktop">
      {/* Floating Clouds: drift across the sky band above the content */}
      <Cloud style={{ top: '10px', left: 0 }} animationDelay={-4} />
      <Cloud style={{ top: '26px', left: 0 }} animationDelay={-14} />
      <Cloud style={{ top: '14px', left: 0 }} animationDelay={-24} />

      {/* LEFT ZONE: Floating Stat Notes */}
      <div className="stat-notes-zone">
        {statNotesData.map(stat => (
          <StatNote key={stat.id} stat={stat} onOpen={openById} />
        ))}
      </div>

      {/* CENTER ZONE: Section Boxes */}
      <div className="sections-zone">
        <header className="hero-card">
          <div className="hero-text">
            <h1 className="hero-name">{aboutData.name}</h1>
            <p className="hero-role">{aboutData.tagline} · {aboutData.focus}</p>
            <p className="hero-status"><span className="hero-dot" aria-hidden="true" /> Growth Intern @ Segwise AI · Open to growth roles · Delhi / Bangalore</p>
            <p className="hero-email"><a href={emailComposeUrl('Hello Manish')}>{contactLinks.email}</a></p>
          </div>
          <nav className="hero-ctas" aria-label="Quick links">
            <a className="hero-cta hero-cta-primary" href={contactLinks.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a className="hero-cta" href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="hero-cta" href={emailComposeUrl('Hello Manish')}>Email</a>
          </nav>
        </header>
        {/* Phones: proof and "looking for" right under the hero instead of at the page bottom */}
        <div className="mobile-proof" aria-label="Highlights">
          <div className="mobile-proof-notes">
            {statNotesData.map(stat => (
              <StatNote key={stat.id} stat={stat} onOpen={openById} />
            ))}
          </div>
          <StickyNote onOpen={() => openById('future-plans')} />
        </div>
        <SectionBox
          title="Experience"
          subtitle="Newest first · tap any for the full story"
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
          variant="tiles"
          items={whatsNextData}
          onIconClick={handleIconClick}
        />
      </div>

      {/* RIGHT: Sticky Note */}
      <StickyNote onOpen={() => openById('future-plans')} />

      {/* BOTTOM LEFT: Terminal */}
      <Terminal />

      {/* Open Windows */}
      {openWindows.map((window) => {
        if (window.type === 'about') {
          return (
            <AboutWindow
              key={window.id}
              zIndex={window.zIndex}
              cascade={window.cascade}
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
              cascade={window.cascade}
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
              cascade={window.cascade}
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
              cascade={window.cascade}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        } else if (window.type === 'viral') {
          return (
            <ViralContentWindow
              key={window.id}
              zIndex={window.zIndex}
              cascade={window.cascade}
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
              cascade={window.cascade}
              onClose={() => handleWindowClose(window.id)}
              onFocus={() => handleWindowFocus(window.id)}
              playSound={playSound}
            />
          );
        }
      })}

      {/* Trash Confirmation Dialog */}
      {showTrashConfirm && (
        <div className="trash-modal" onClick={handleTrashCancel} role="presentation">
          <div className="trash-content trash-confirm" role="alertdialog" aria-modal="true" aria-label="Open the bin?" onClick={(e) => e.stopPropagation()}>
            <div className="trash-header">
              <h2 className="trash-title">🗑️ Pakka?</h2>
              <button type="button" className="trash-close" aria-label="Close" onClick={handleTrashCancel}>✕</button>
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
                aria-label="Close"
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
        handleIconClick(aboutLinksData.find(p => p.id === 'about-me'));
      }} />

      {/* Trash Dock */}
      <Dock onTrashClick={handleTrashClick} />
    </main>
  );
};

export default Desktop;
