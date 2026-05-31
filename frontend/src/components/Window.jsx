import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { X, Minus, Square } from 'lucide-react';

const Window = ({ project, onClose, zIndex, onFocus, playSound }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (playSound) {
      playSound();
    }
  }, [playSound]);

  const handleClose = () => {
    if (playSound) {
      playSound();
    }
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
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div className="window-header">
          <div className="window-controls">
            <button className="window-btn window-btn-close" onClick={handleClose}>
              <X size={10} />
            </button>
            <button className="window-btn window-btn-minimize">
              <Minus size={10} />
            </button>
            <button className="window-btn window-btn-maximize">
              <Square size={10} />
            </button>
          </div>
          <div className="window-title">{project.title}</div>
        </div>
        
        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon">{project.icon}</div>
            <div>
              <h2 className="window-project-title">{project.title}</h2>
              <p className="window-role">{project.content.role}</p>
              <p className="window-period">{project.content.period}</p>
            </div>
          </div>

          <div className="window-description">
            <p>{project.content.description}</p>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">Key Achievements</h3>
            <ul className="window-achievements">
              {project.content.achievements.map((achievement, idx) => (
                <li key={idx} className="window-achievement-item">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="window-section">
            <h3 className="window-section-title">Skills</h3>
            <div className="window-skills">
              {project.content.skills.map((skill, idx) => (
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

export default Window;
