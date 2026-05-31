import React from 'react';
import { Trash2, Mail, FileText, Github, Linkedin } from 'lucide-react';

const Dock = ({ onTrashClick }) => {
  const dockItems = [
    { icon: <Mail size={24} />, label: 'Email', action: () => window.location.href = 'mailto:manishmohanty19@gmail.com' },
    { icon: <FileText size={24} />, label: 'Resume' },
    { icon: <Github size={24} />, label: 'GitHub' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn' },
  ];

  return (
    <div className="dock-container">
      <div className="dock">
        {dockItems.map((item, idx) => (
          <div 
            key={idx}
            className="dock-item"
            onClick={item.action}
            title={item.label}
          >
            <div className="dock-item-icon">
              {item.icon}
            </div>
          </div>
        ))}
        
        {/* Trash Can Easter Egg */}
        <div className="dock-divider"></div>
        <div 
          className="dock-item dock-trash"
          onClick={onTrashClick}
          title="Rejected Concepts"
        >
          <div className="dock-item-icon">
            <Trash2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
