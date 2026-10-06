import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { viralContent } from '../data/viralContentData';
import './ViralContentWindow.css';

const formatViews = (n) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
const byViews = [...viralContent].sort((a, b) => b.views - a.views);
const totalViews = viralContent.reduce((sum, item) => sum + item.views, 0);

const ViralContentWindow = ({ onClose, zIndex, onFocus, playSound, cascade = 0 }) => {
  const nodeRef = useRef(null);
  const handleClose = (e) => {
    e.stopPropagation();
    if (playSound) playSound();
    onClose();
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      cancel=".window-btn"
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className="window viral-window"
        style={{ zIndex, top: `calc(10% + ${cascade * 28}px)`, left: `calc(20% + ${cascade * 28}px)` }}
        role="dialog"
        aria-label="Viral Content"
        onPointerDown={(e) => {
          e.stopPropagation();
          onFocus();
        }}
      >
        <div className="window-header">
          <div className="window-controls">
            <button
              type="button"
              className="window-btn window-btn-close"
              aria-label="Close window"
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              data-testid="close-viral-content"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">Viral Content</div>
        </div>

        <div className="window-content">
          <div className="window-header-section">
            <div className="window-icon">
              <img src="/assets/icons/viralContent.svg" alt="" width="48" height="48" className="window-icon-img viral-header-icon" />
            </div>
            <div>
              <h2 className="window-project-title">Viral Content</h2>
              <p className="window-role">Regional creator campaigns</p>
            </div>
          </div>

          <p className="window-description viral-intro">
            {formatViews(totalViews)}+ organic Instagram views across {viralContent.length} creator reels I worked on end to end at Perfora and Zoop Live.
          </p>

          <ul className="viral-grid" aria-live="polite">
            {byViews.map((item) => (
              <li key={item.id} className="viral-card">
                <div className="viral-card-top">
                  <span className="viral-avatar" aria-hidden="true">{item.creator.charAt(0)}</span>
                  <div className="viral-card-who">
                    <h3 className="viral-creator">{item.creator}</h3>
                    <div className="viral-tags">
                      <span className="viral-tag viral-tag-lang">{item.language}</span>
                      <span className="viral-tag">{item.product}</span>
                    </div>
                  </div>
                </div>

                <p className={`viral-hook viral-hook-${item.hookType}`}>
                  <span className="viral-hook-label">{item.hookType === 'visual' ? 'Visual hook' : 'Hook'}</span>
                  {item.hookType === 'spoken' ? `“${item.hook}”` : item.hook}
                </p>

                <div className="viral-card-foot">
                  <dl className="viral-stats">
                    <div className="viral-cost">
                      <dt className="viral-cost-label">Views</dt>
                      <dd className="viral-cost-value">{formatViews(item.views)}</dd>
                    </div>
                    <div className="viral-cost">
                      <dt className="viral-cost-label">Comments</dt>
                      <dd className="viral-cost-value">{item.comments === null ? 'Off' : `${item.commentsApprox ? '~' : ''}${formatViews(item.comments)}`}</dd>
                    </div>
                  </dl>
                  <a
                    className="window-cta viral-watch"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.format === 'post' ? 'View post' : 'Watch reel'} by ${item.creator} on Instagram (opens in a new tab)`}
                  >
                    {item.format === 'post' ? 'View post ↗' : 'Watch reel ↗'}
                  </a>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </Draggable>
  );
};

export default ViralContentWindow;
