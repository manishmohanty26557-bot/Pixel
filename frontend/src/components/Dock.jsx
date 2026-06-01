import React from 'react';
import { Trash2 } from 'lucide-react';

const Dock = ({ onTrashClick }) => {
  return (
    <div className="dock-container">
      <div className="dock">
        {/* Trash Can Easter Egg */}
        <div 
          className="dock-item dock-trash"
          onClick={onTrashClick}
          title="Rejected Concepts - Click for Dad Jokes!"
          data-testid="trash-can-btn"
        >
          <div className="dock-item-icon">
            <Trash2 size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
