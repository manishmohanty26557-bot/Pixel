import React from 'react';

const PixelGirl = ({ onClick }) => {
  return (
    <button
      type="button"
      className="pixel-girl-container"
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      aria-label="About Manish"
      title="Hi! I'm Manish — click to say hello"
      data-testid="pixel-girl-btn"
    >
      <span className="pixel-girl">
        <img
          src="/assets/manish-avatar.png"
          alt="Pixel-art portrait of Manish"
          className="pixel-girl-image"
          width="96"
          height="96"
          decoding="async"
        />
      </span>
    </button>
  );
};

export default PixelGirl;
