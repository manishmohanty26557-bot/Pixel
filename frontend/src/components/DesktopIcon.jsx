import React from 'react';
import { ExternalLink } from 'lucide-react';

const DesktopIcon = ({ project, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(project);
  };

  return (
    <div 
      className={`desktop-icon ${project.isLink ? 'desktop-icon-link' : ''}`}
      onClick={handleClick}
      style={{
        left: `${project.position.x}px`,
        top: `${project.position.y}px`
      }}
      data-testid={`icon-${project.id}`}
    >
      <div className="desktop-icon-image">
        <span className="desktop-icon-emoji">{project.icon}</span>
        {project.isLink && (
          <span className="desktop-icon-link-badge">
            <ExternalLink size={10} />
          </span>
        )}
      </div>
      <div className="desktop-icon-label">{project.title}</div>
    </div>
  );
};

export default DesktopIcon;
