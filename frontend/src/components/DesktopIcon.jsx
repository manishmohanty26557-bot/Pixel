import React from 'react';
import { ExternalLink } from 'lucide-react';

const DesktopIcon = ({ project, onClick, inline = false }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(project);
  };

  const positionStyle = inline ? {} : {
    position: 'absolute',
    left: `${project.position?.x}px`,
    top: `${project.position?.y}px`
  };

  return (
    <div 
      className={`desktop-icon ${project.isLink ? 'desktop-icon-link' : ''} ${project.id === 'segwise-ai' ? 'desktop-icon-segwise' : ''} ${inline ? 'desktop-icon-inline' : ''}`}
      onClick={handleClick}
      style={positionStyle}
      data-testid={`icon-${project.id}`}
    >
      <div className="desktop-icon-image">
        {project.logo ? (
          <img className="desktop-icon-logo" src={project.logo} alt={`${project.title} logo`} />
        ) : (
          <span className="desktop-icon-emoji">{project.icon}</span>
        )}
        {project.isLink && (
          <span className="desktop-icon-link-badge">
            <ExternalLink size={10} />
          </span>
        )}
        {project.badge && (
          <span className={`desktop-icon-status-badge badge-${project.badge.color}`}>
            {project.badge.text}
          </span>
        )}
      </div>
      <div className="desktop-icon-label">{project.title}</div>
    </div>
  );
};

export default DesktopIcon;
