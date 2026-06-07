import React from 'react';

const StatNote = ({ stat }) => {
  return (
    <div 
      className="stat-note"
      style={{
        top: `${stat.top}px`,
        left: `${stat.left}px`,
        transform: `rotate(${stat.rotation}deg)`
      }}
    >
      <div className="stat-note-value">{stat.value}</div>
      <div className="stat-note-divider">·</div>
      <div className="stat-note-label">{stat.label}</div>
    </div>
  );
};

export default StatNote;
