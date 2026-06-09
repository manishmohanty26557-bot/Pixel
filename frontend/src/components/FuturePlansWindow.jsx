import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { aboutData } from '../data/mockData';

const FuturePlansWindow = ({ onClose, zIndex, onFocus, playSound }) => {
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
      bounds="parent"
      onStart={onFocus}
    >
      <div 
        ref={nodeRef}
        className="window"
        style={{ zIndex, top: '12%', left: '18%' }}
        onMouseDown={onFocus}
        onPointerDown={onFocus}
        onTouchStart={onFocus}
      >
        <div className="window-header">
          <div className="window-controls">
            <button 
              className="window-btn window-btn-close" 
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
              <h2 className="window-project-title">Next 2 Months</h2>
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

          <div className="future-cta">
            <p>If this sounds like someone you'd want on your team, let's talk →</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default FuturePlansWindow;
