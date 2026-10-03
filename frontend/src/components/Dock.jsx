import React from 'react';
import { Trash2 } from 'lucide-react';

const Dock = ({ onTrashClick }) => {
  return (
    <div className="dock-container">
      <div className="dock-label" aria-hidden="true">Trash</div>
      <div className="dock">
        <button
          type="button"
          className="dock-item dock-trash"
          onClick={onTrashClick}
          aria-label="Trash: what my dad thinks about AI"
          title="Trash: what my dad thinks about AI"
          data-testid="trash-can-btn"
        >
          <span className="dock-item-icon">
            <Trash2 size={28} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dock;
