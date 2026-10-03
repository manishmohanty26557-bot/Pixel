import React from 'react';
import { ExternalLink } from 'lucide-react';

const DesktopIcon = ({ project, onClick, inline = false }) => {
  const isExternal = project.isLink && project.url;
  const IconContainer = isExternal ? 'a' : 'button';

  const handleClick = (e) => {
    e.stopPropagation();
    if (isExternal) return;
    onClick(project);
  };

  const positionStyle = inline ? {} : {
    position: 'absolute',
    left: `${project.position?.x}px`,
    top: `${project.position?.y}px`
  };

  return (
    <IconContainer
      className={`desktop-icon ${project.isLink ? 'desktop-icon-link' : ''} ${project.id === 'segwise-ai' ? 'desktop-icon-segwise' : ''} ${inline ? 'desktop-icon-inline' : ''}`}
      onClick={handleClick}
      style={positionStyle}
      data-testid={`icon-${project.id}`}
      {...(isExternal ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${project.title} (opens in a new tab)`
      } : {
        type: 'button'
      })}
    >
      <div className="desktop-icon-image">
        {project.logo ? (
          <img className="desktop-icon-logo" src={project.logo} alt={`${project.title} logo`} />
        ) : project.pixelIcon ? (
          <img
            className="desktop-icon-pixel"
            src={`/assets/icons/${project.pixelIcon}.svg`}
            alt=""
            width="40"
            height="40"
          />
        ) : (
          <span className="desktop-icon-emoji">{project.icon}</span>
        )}
        {project.isLink && (
          <span className="desktop-icon-link-badge" aria-hidden="true">
            <ExternalLink size={10} />
          </span>
        )}
        {project.badge && (
          <span
            className={`desktop-icon-status-badge badge-${project.badge.color}`}
            title={project.badge.text === 'PPO' ? 'Pre-Placement Offer' : undefined}
          >
            {project.badge.text}
          </span>
        )}
      </div>
      <div className="desktop-icon-label">{project.title}</div>
      {project.hint && <div className="desktop-icon-hint">{project.hint}</div>}
    </IconContainer>
  );
};

export default DesktopIcon;
