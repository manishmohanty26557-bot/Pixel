import React from 'react';

const Cloud = ({ style, animationDelay = 0 }) => {
  return (
    <div 
      className="cloud"
      style={{
        ...style,
        animationDelay: `${animationDelay}s`
      }}
    >
      <div className="cloud-part cloud-part-1"></div>
      <div className="cloud-part cloud-part-2"></div>
      <div className="cloud-part cloud-part-3"></div>
    </div>
  );
};

export default Cloud;
