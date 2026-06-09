import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { X, Mail, Phone, GraduationCap } from 'lucide-react';
import { aboutData, skillsData } from '../data/mockData';

const AboutWindow = ({ onClose, zIndex, onFocus, playSound }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (playSound) playSound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      onStart={onFocus}
    >
      <div 
        ref={nodeRef}
        className="window"
        style={{ zIndex, top: '10%', left: '25%' }}
        onMouseDown={onFocus}
        onPointerDown={(e) => {
          e.stopPropagation();
          onFocus();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          onFocus();
        }}
      >
        <div className="window-header">
          <div className="window-controls">
            <button 
              type="button"
              className="window-btn window-btn-close" 
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => { e.stopPropagation(); handleClose(e); }}
              data-testid="close-about"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">About Me</div>
        </div>
        
        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon">👤</div>
            <div>
              <h2 className="window-project-title">{aboutData.name}</h2>
              <p className="window-role">{aboutData.tagline}</p>
            </div>
          </div>

          <div className="window-description">
            <p>{aboutData.bio}</p>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">Contact</h3>
            <div className="about-contact">
              <p className="about-contact-item">
                <Mail size={12} /> {aboutData.email}
              </p>
              <p className="about-contact-item">
                <Phone size={12} /> {aboutData.phone}
              </p>
              <p className="about-contact-item">
                <GraduationCap size={12} /> {aboutData.education}
              </p>
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
