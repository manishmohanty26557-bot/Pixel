import React from 'react';
import DesktopIcon from './DesktopIcon';

const SectionBox = ({ title, subtitle, items, onIconClick, style }) => {
  return (
    <div className="section-box" style={style}>
      <div className="section-box-header">
        <span className="section-box-title">▸ {title}</span>
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
