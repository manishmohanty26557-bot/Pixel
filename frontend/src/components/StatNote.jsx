import React from 'react';
import BrandText from './BrandText';

// Each note is an outcome; clicking it opens the window the number comes from
const StatNote = ({ stat, onOpen }) => {
  return (
    <div
      className="stat-note"
      onClick={(e) => {
        e.stopPropagation();
        if (onOpen) onOpen(stat.opens);
      }}
      style={{
        top: `${stat.top}px`,
        left: `${stat.left}px`,
        transform: `rotate(${stat.rotation}deg)`
      }}
    >
      <button
        type="button"
        className="stat-note-main"
        aria-label={`${stat.value} ${stat.label}, ${stat.source}. Open details`}
      >
        <div className="stat-note-value">{stat.value}</div>
        <div className="stat-note-divider">·</div>
        <div className="stat-note-label">{stat.label}</div>
      </button>
      {/* Company names link out; the rest of the note opens the details */}
      {stat.source && <div className="stat-note-source"><BrandText text={stat.source} /></div>}
    </div>
  );
};

export default StatNote;
