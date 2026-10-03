import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { aboutData, emailComposeUrl } from '../data/mockData';

const FuturePlansWindow = ({ onClose, zIndex, onFocus, playSound, cascade = 0 }) => {
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
        style={{ zIndex, top: `calc(12% + ${cascade * 28}px)`, left: `calc(18% + ${cascade * 28}px)` }}
        role="dialog"
        aria-label="Next 6 Months"
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
              data-testid="close-future-plans"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">What's Next for Manish</div>
        </div>
        
        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon">🎯</div>
            <div>
              <h2 className="window-project-title">Next 6 Months</h2>
              <p className="window-role">What I want to do next</p>
            </div>
          </div>

          <div className="window-description">
            <p>The next chapter is all about big moves, building, and a little bit of fun. Here's what I'm chasing:</p>
          </div>

          <div className="next-months-grid">
            {aboutData.nextTwoMonths.map((item, idx) => (
              <div key={idx} className="next-month-card">
                <div className="next-month-icon">{item.icon}</div>
                <div className="next-month-content">
                  <h4 className="next-month-title">{item.title}</h4>
                  <p className="next-month-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="future-cta" href={emailComposeUrl("Let's talk growth")} target="_blank" rel="noopener noreferrer">
            <p>If this sounds like someone you'd want on your team, let's talk →</p>
          </a>
        </div>
      </div>
    </Draggable>
  );
};

export default FuturePlansWindow;
