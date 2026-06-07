import React from 'react';
import { stickyNoteData } from '../data/mockData';

const StickyNote = () => {
  return (
    <div className="sticky-note">
      <div className="sticky-note-header"></div>
      <div className="sticky-note-content">
        <p className="sticky-note-text">{stickyNoteData.line1}</p>
        <p className="sticky-note-text-attribution">{stickyNoteData.line2}</p>
      </div>
    </div>
  );
};

export default StickyNote;
