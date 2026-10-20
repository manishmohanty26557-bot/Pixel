import React from 'react';
import { stickyNoteData } from '../data/mockData';

const StickyNote = ({ onOpen, emailHref, className = '' }) => {
  return (
    <div className={`sticky-note ${className}`.trim()}>
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
        {emailHref && (
          <a className="sticky-note-email" href={emailHref} target="_blank" rel="noopener noreferrer">
            Email me ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default StickyNote;
