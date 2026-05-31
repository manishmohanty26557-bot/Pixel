import React from 'react';
import { aboutData } from '../data/mockData';

const StickyNote = () => {
  return (
    <div className="sticky-note">
      <div className="sticky-note-header"></div>
      <div className="sticky-note-content">
        <p className="sticky-note-text">{aboutData.tagline}</p>
        <div className="sticky-note-signature">- Manish</div>
      </div>
    </div>
  );
};

export default StickyNote;
