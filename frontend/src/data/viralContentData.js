// Snapshot of the "Viral Content" Google Sheet (single tab: Sheet1).
// Columns: Creator, Language, Product, Hook, Reel (hyperlink), Cost.
// Re-export the sheet and update this file if the sheet changes.

export const viralContentSheetUrl =
  'https://docs.google.com/spreadsheets/d/1lCCFRa-feG-hpk5pgfToyNAn7SZMRpsVrMBZkwNeMGk/edit?usp=sharing';

/**
 * @typedef {Object} ViralPiece
 * @property {string} id
 * @property {string} creator
 * @property {string} language
 * @property {string} product
 * @property {string} hook        Opening line / visual hook of the video
 * @property {'spoken'|'visual'} hookType
 * @property {'reel'|'post'} format
 * @property {string} url         Instagram link
 * @property {number} cost        Creator fee in INR
 */

/** @type {ViralPiece[]} */
export const viralContent = [
  {
    id: 'poojita-reddy',
    creator: 'Poojita Reddy',
    language: 'Telugu',
    product: 'Teeth Whitening Strips',
    hook: "I didn't think I'd be this impressed after just one use!",
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DLM9RT-T96u/',
    cost: 11000,
  },
  {
    id: 'sourav',
    creator: 'Sourav',
    language: 'Telugu',
    product: 'Teeth Whitening Strips',
    hook: 'Can you notice any difference in me?',
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DL6ZyeJSLKX/',
    cost: 15000,
  },
  {
    id: 'sarath',
    creator: 'Sarath',
    language: 'Tamil',
    product: 'Purple Serum',
    hook: 'Tried this viral purple serum',
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DLpURPzRTRV/',
    cost: 20000,
  },
  {
    id: 'keerthana',
    creator: 'Keerthana',
    language: 'Malayalam',
    product: 'Teeth Whitening Strips',
    hook: 'Yellow teeth reversal',
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DMekTV0Txx2/',
    cost: 7000,
  },
  {
    id: 'indushree',
    creator: 'Indushree',
    language: 'Kannada',
    product: 'Purple Serum',
    hook: "I didn't think I'd be this impressed after just one use",
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DMw6HCTvWBu/',
    cost: 2500,
  },
  {
    id: 'jomas-journey',
    creator: 'Jomas Journey',
    language: 'Tamil',
    product: 'Purple Serum',
    hook: 'Close-up of creator examining yellow teeth and aggressively applying baking soda paste',
    hookType: 'visual',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DNNqKDdxjOs/',
    cost: 20000,
  },
  {
    id: 'charulatha',
    creator: 'Charulatha',
    language: 'Telugu',
    product: 'Purple Serum',
    hook: "Home remedies don't work",
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DMxjoRky0j8/',
    cost: 8000,
  },
  {
    id: 'sunny',
    creator: 'Sunny',
    language: 'Telugu',
    product: 'Purple Serum',
    hook: 'I must be doing something wrong... how did my teeth go from yellow to this white?',
    hookType: 'spoken',
    format: 'reel',
    url: 'https://www.instagram.com/reel/DNNxYwwTKz4/',
    cost: 3000,
  },
  {
    id: 'noor',
    creator: 'Noor',
    language: 'Hindi',
    product: 'Zoop',
    hook: 'Person falling on the boxes',
    hookType: 'visual',
    format: 'post',
    url: 'https://www.instagram.com/p/DUszGgik24A/',
    cost: 2500,
  },
];
