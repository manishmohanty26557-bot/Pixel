import React from 'react';

const DesktopIcon = ({ project, onClick }) => {
  return (
    <div 
      className="desktop-icon"
      onClick={() => onClick(project)}
      style={{
        left: `${project.position.x}px`,
        top: `${project.position.y}px`
      }}
    >
      <div className="desktop-icon-image">
        <span className="desktop-icon-emoji">{project.icon}</span>
      </div>
      <div className="desktop-icon-label">{project.title}</div>
    </div>
  );
};

export default DesktopIcon;
