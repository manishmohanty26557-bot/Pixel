import React from 'react';
import { terminalData } from '../data/mockData';
import BrandText from './BrandText';

const Terminal = () => {
  return (
    <div className="terminal-widget" data-testid="terminal-widget">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red"></div>
        <div className="terminal-dot terminal-dot-yellow"></div>
        <div className="terminal-dot terminal-dot-green"></div>
        <div className="terminal-title">~ manish.sh</div>
      </div>
      <div className="terminal-body">
        {terminalData.map((line, idx) => (
          <div key={idx} className="terminal-line">
            <BrandText text={line} />
            {idx === terminalData.length - 1 && <span className="terminal-cursor">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
