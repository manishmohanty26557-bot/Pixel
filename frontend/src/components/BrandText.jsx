import React from 'react';
import { internshipsData } from '../data/mockData';

// Every name a company goes by in the copy, mapped to that company's site
const BRAND_SITES = [
  ['Segwise AI', 'segwise-ai'],
  ['segwise ai', 'segwise-ai'],
  ['Kanky Reacts', 'kankyreacts'],
  ['Kankyreacts', 'kankyreacts'],
  ['Zoop Live', 'zoop-live'],
  ['Zoop', 'zoop-live'],
  ['Eleven Studios', 'eleven-studios'],
  ['Perfora', 'perfora']
].map(([name, id]) => [name, internshipsData.find(i => i.id === id)?.website]).filter(([, url]) => url);

// Longest names first so "Zoop Live" wins over "Zoop"
const PATTERN = new RegExp(
  `(${BRAND_SITES.map(([n]) => n).sort((a, b) => b.length - a.length).join('|')})`,
  'g'
);

// Renders text with each company name linked out to that company's site
const BrandText = ({ text }) => {
  if (!text) return null;
  return text.split(PATTERN).map((part, i) => {
    const url = BRAND_SITES.find(([n]) => n === part)?.[1];
    if (!url) return part;
    return (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="brand-link"
        onClick={e => e.stopPropagation()}
      >
        {part}
      </a>
    );
  });
};

export default BrandText;
