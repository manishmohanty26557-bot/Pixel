import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X, Mail, GraduationCap } from 'lucide-react';
import { aboutData, skillsData, contactLinks, emailFor } from '../data/mockData';
import BrandText from './BrandText';

const AboutWindow = ({ onClose, zIndex, onFocus, playSound, cascade = 0 }) => {
  const nodeRef = useRef(null);


  const handleClose = (e) => {
    e.stopPropagation();
    if (playSound) playSound();
    onClose();
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      cancel=".window-btn"
      bounds="parent"
    >
      <div 
        ref={nodeRef}
        className="window"
        style={{ zIndex, top: `calc(10% + ${cascade * 28}px)`, left: `calc(25% + ${cascade * 28}px)` }}
        role="dialog"
        aria-label="About Me"
        onPointerDown={(e) => {
          e.stopPropagation();
          onFocus();
        }}
      >
        <div className="window-header">
          <div className="window-controls">
            <button 
              type="button"
              className="window-btn window-btn-close"
              aria-label="Close window" 
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              data-testid="close-about"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">About Me</div>
        </div>
        
        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon"><img src="/assets/manish-avatar.png" alt="" width="40" height="40" className="window-icon-img" /></div>
            <div>
              <h2 className="window-project-title">{aboutData.name}</h2>
              <p className="window-role">{aboutData.tagline} · {aboutData.focus}</p>
            </div>
          </div>

          <div className="window-description">
            <p><BrandText text={aboutData.bio} /></p>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">Contact</h3>
            <div className="about-contact">
              <p className="about-contact-item">
                <Mail size={12} /> <a href={emailFor('role')} target="_blank" rel="noopener noreferrer">{aboutData.email}</a>
              </p>
              <p className="about-contact-item">
                <GraduationCap size={12} /> {aboutData.education}
              </p>
            </div>
            <div className="window-cta-row">
              <a className="window-cta" href={contactLinks.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
              <a className="window-cta" href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">Core Skills</h3>
            <div className="window-skills">
              {skillsData.map((skill, idx) => (
                <span key={idx} className="window-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutWindow;
