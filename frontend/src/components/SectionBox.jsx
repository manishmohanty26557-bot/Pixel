import React from 'react';
import DesktopIcon from './DesktopIcon';

const SectionBox = ({ title, subtitle, items, onIconClick, style, variant }) => {
  return (
    <div className={`section-box${variant ? ` section-box--${variant}` : ''}`} style={style}>
      <div className="section-box-header">
        <h2 className="section-box-title"><span className="section-box-bullet" aria-hidden="true" />{title}</h2>
        {subtitle && <span className="section-box-subtitle">{subtitle}</span>}
      </div>
      <div className="section-box-icons">
        {items.map((item) => (
          <DesktopIcon
            key={item.id}
            project={item}
            onClick={onIconClick}
            inline={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionBox;
