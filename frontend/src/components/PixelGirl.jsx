import React from 'react';

const PixelGirl = ({ onClick }) => {
  return (
    <div className="pixel-girl-container" onClick={onClick} data-testid="pixel-girl-btn">
      <div className="pixel-girl-tooltip">
        Click Manish to know more →
      </div>
      <div className="pixel-girl">
        <img 
          src="/assets/pixel-girl.png" 
          alt="Manish - Click to learn more" 
          className="pixel-girl-image"
        />
      </div>
    </div>
  );
};

export default PixelGirl;
