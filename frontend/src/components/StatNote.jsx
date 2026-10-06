import React from 'react';

// Each note is an outcome; clicking it opens the window the number comes from
const StatNote = ({ stat, onOpen }) => {
  return (
    <button
      type="button"
      className="stat-note"
      onClick={(e) => {
        e.stopPropagation();
        if (onOpen) onOpen(stat.opens);
      }}
      aria-label={`${stat.value} ${stat.label}, ${stat.source}. Open details`}
      style={{
        top: `${stat.top}px`,
        left: `${stat.left}px`,
        transform: `rotate(${stat.rotation}deg)`
      }}
    >
      <div className="stat-note-value">{stat.value}</div>
      <div className="stat-note-divider">·</div>
      <div className="stat-note-label">{stat.label}</div>
      {stat.source && <div className="stat-note-source">{stat.source} ↗</div>}
    </button>
  );
};

export default StatNote;
