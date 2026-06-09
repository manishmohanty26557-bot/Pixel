import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';

const Window = ({ project, onClose, zIndex, onFocus, playSound }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (playSound) {
      playSound();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    if (playSound) {
      playSound();
    }
    onClose();
  };

  const isStrategy = project.type === 'strategy';

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
        style={{ zIndex }}
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
              data-testid={`close-${project.id}`}
            >
              <X size={10} />
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
              {project.content.period && (
                <p className="window-period">{project.content.period}</p>
              )}
            </div>
          </div>

          <div className="window-description">
            {project.content.description && (
              <p><strong>{project.content.description}</strong></p>
            )}
            {project.content.details && (
              <p className="window-details">{project.content.details}</p>
            )}
          </div>

          {isStrategy ? (
            <div className="window-section">
              <h3 className="window-section-title">Execution Plan</h3>
              <ul className="window-achievements">
                {project.content.keyPoints.map((point, idx) => (
                  <li key={idx} className="window-achievement-item">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
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

              {project.content.skills && (
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
              )}
            </>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
