import React, { useId } from 'react';
import { siYoutube, siInstagram, siX, siTiktok, siSubstack } from 'simple-icons';

// Official brand glyphs (Simple Icons, 24x24 viewBox) on an app-icon tile.
// simple-icons dropped LinkedIn at LinkedIn's request, so its mark is inlined.
const LINKEDIN_PATH = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z';

const Tile = ({ size, bg, fg, path, gradient }) => {
  // Unique per tile: a shared gradient id breaks once the first tile unmounts
  const gradId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {gradient && (
        <defs>
          <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
            {gradient.map(([offset, color]) => <stop key={offset} offset={offset} stopColor={color} />)}
          </radialGradient>
        </defs>
      )}
      <rect x="2" y="2" width="44" height="44" rx="11" fill={gradient ? `url(#${gradId})` : bg} />
      <g transform="translate(11 11) scale(1.0833)">
        <path d={path} fill={fg} />
      </g>
    </svg>
  );
};

const INSTAGRAM_GRADIENT = [['0%', '#FDF497'], ['5%', '#FDF497'], ['45%', '#FD5949'], ['60%', '#D6249F'], ['90%', '#285AEB']];

const PLATFORMS = [
  { id: 'linkedin', name: 'LinkedIn', bg: '#0A66C2', fg: '#FFFFFF', path: LINKEDIN_PATH },
  { id: 'x', name: 'X', bg: '#000000', fg: '#FFFFFF', path: siX.path },
  { id: 'youtube', name: 'YouTube', bg: `#${siYoutube.hex}`, fg: '#FFFFFF', path: siYoutube.path },
  { id: 'instagram', name: 'Instagram', fg: '#FFFFFF', path: siInstagram.path, gradient: INSTAGRAM_GRADIENT },
  { id: 'tiktok', name: 'TikTok', bg: '#000000', fg: '#FFFFFF', path: siTiktok.path },
  { id: 'substack', name: 'Substack', bg: `#${siSubstack.hex}`, fg: '#FFFFFF', path: siSubstack.path }
];

export const PLATFORM_LOGOS = PLATFORMS.map(({ id, name, ...tile }) => ({
  id,
  name,
  Component: ({ size = 40 }) => <Tile size={size} {...tile} />
}));
