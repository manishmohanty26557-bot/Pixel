import React from 'react';

export const YouTubeLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="44" height="28" rx="6" fill="#FF0000"/>
    <polygon points="20,18 20,30 32,24" fill="#FFFFFF"/>
  </svg>
);

export const InstagramLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="igGrad" cx="30%" cy="100%" r="100%">
        <stop offset="0%" stopColor="#FED576"/>
        <stop offset="25%" stopColor="#F47133"/>
        <stop offset="50%" stopColor="#BC3081"/>
        <stop offset="75%" stopColor="#4C63D2"/>
      </radialGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#igGrad)"/>
    <rect x="11" y="11" width="26" height="26" rx="7" fill="none" stroke="#FFFFFF" strokeWidth="2.5"/>
    <circle cx="24" cy="24" r="6" fill="none" stroke="#FFFFFF" strokeWidth="2.5"/>
    <circle cx="34" cy="14" r="2" fill="#FFFFFF"/>
  </svg>
);

export const FacebookLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="#1877F2"/>
    <path d="M27 14 L27 19 L31 19 L30 24 L27 24 L27 38 L22 38 L22 24 L19 24 L19 19 L22 19 L22 16.5 C22 13 24 11 27.5 11 L31 11 L31 15 L29 15 C27.5 15 27 15.5 27 16.5 Z" fill="#FFFFFF"/>
  </svg>
);

export const LinkedInLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="6" fill="#0A66C2"/>
    <rect x="12" y="20" width="5" height="16" fill="#FFFFFF"/>
    <circle cx="14.5" cy="14" r="3" fill="#FFFFFF"/>
    <path d="M21 20 L26 20 L26 22.5 C27 21 29 19.5 32 19.5 C36 19.5 37 22 37 26 L37 36 L32 36 L32 27 C32 25 31.5 23.5 30 23.5 C28.5 23.5 27 24.5 27 27 L27 36 L21 36 Z" fill="#FFFFFF"/>
  </svg>
);

export const MetaLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="#0867DF"/>
    <path d="M11 27 C11 22 14 17 19 17 C22 17 24 19 26 23 C28 27 30 31 33 31 C36 31 37 29 37 27 C37 25 36 24 34 24 C32 24 30 26 28 28 C25 32 22 36 18 36 C13 36 11 32 11 27 Z M11 27 C11 32 13 36 18 36 C22 36 25 32 28 28 C30 26 32 24 34 24 C36 24 37 25 37 27" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WhatsAppLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#25D366"/>
    <path d="M16 18 C16 16 17 15 19 15 C20 15 20.5 15.5 21 17 L22 19 C22.5 20 22 21 21 21.5 C20.5 22 20 22.5 21 24 C22 26 24 28 26 29 C27.5 30 28 29.5 28.5 29 C29 28 30 27.5 31 28 L33 29 C34 29.5 34.5 30 34.5 31 C34.5 33 33.5 34 31.5 34 C25 34 16 25 16 18.5 Z" fill="#FFFFFF"/>
  </svg>
);

export const PLATFORM_LOGOS = [
  { id: 'youtube', name: 'YT View', Component: YouTubeLogo },
  { id: 'instagram', name: 'IG Follow', Component: InstagramLogo },
  { id: 'facebook', name: 'FB Lead', Component: FacebookLogo },
  { id: 'linkedin', name: 'LinkedIn', Component: LinkedInLogo },
  { id: 'meta', name: 'Meta', Component: MetaLogo },
  { id: 'whatsapp', name: 'WhatsApp', Component: WhatsAppLogo }
];
