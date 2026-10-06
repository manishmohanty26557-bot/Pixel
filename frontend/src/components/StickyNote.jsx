import React from 'react';
import { stickyNoteData } from '../data/mockData';

const StickyNote = ({ onOpen }) => {
  return (
    <div className="sticky-note">
      <div className="sticky-note-header"></div>
      <div className="sticky-note-content">
        <p className="sticky-note-title">{stickyNoteData.title}</p>
        <ul className="sticky-note-list">
          {stickyNoteData.lines.map((line) => (
            <li key={line} className="sticky-note-text">{line}</li>
          ))}
        </ul>
        {onOpen && (
          <button type="button" className="sticky-note-cta" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
            {stickyNoteData.cta}
          </button>
        )}
      </div>
    </div>
  );
};

export default StickyNote;
