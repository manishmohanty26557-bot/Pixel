import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { extracurricularsData } from '../data/mockData';

const ExtracurricularsWindow = ({ onClose, zIndex, onFocus, playSound, cascade = 0 }) => {
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
        style={{ zIndex, top: `calc(22% + ${cascade * 28}px)`, left: `calc(18% + ${cascade * 28}px)` }}
        role="dialog"
        aria-label="Activities"
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
              data-testid="close-extracurriculars"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">Activities</div>
        </div>
        
        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon">🏆</div>
            <div>
              <h2 className="window-project-title">Beyond Academics</h2>
              <p className="window-role">Leadership, Competitions & Community</p>
            </div>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">🎯 Leadership</h3>
            <ul className="window-achievements">
              {extracurricularsData.leadership.map((item, idx) => (
                <li key={idx} className="window-achievement-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">🏅 Competition Wins</h3>
            <ul className="window-achievements">
              {extracurricularsData.competitions.map((item, idx) => (
                <li key={idx} className="window-achievement-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">⭐ Other Highlights</h3>
            <ul className="window-achievements">
              {extracurricularsData.other.map((item, idx) => (
                <li key={idx} className="window-achievement-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ExtracurricularsWindow;
