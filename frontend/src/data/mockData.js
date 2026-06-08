// Mock data for portfolio projects - restructured into sections

export const internshipsData = [
  {
    id: 'zoop-live',
    title: 'Zoop Live',
    icon: '📺',
    type: 'internship',
    badge: { text: 'PPO', color: 'gold' },
    content: {
      role: 'Growth Intern (Founder\'s Office)',
      period: 'January 2026 - April 2026',
      description: 'Led performance marketing initiatives for live commerce platform',
      achievements: [
        'Ran YouTube ads for 20 live sellers, maintaining CPC < ₹2',
        'Managed ₹30K/month Meta ads budget with CPR of 1.78',
        'Scaled Facebook from 60K to 100K followers',
        'Built end-to-end influencer pipeline',
        'Developed 3 YouTube channels to 1K+ subscribers',
        'Built Slack bots for performance tracking',
        '🏆 Pre-Placement Offer (PPO)'
      ],
      skills: ['YouTube Ads', 'Meta Ads', 'Funnel Optimization']
    }
  },
  {
    id: 'perfora',
    title: 'Perfora',
    icon: '🛍️',
    type: 'internship',
    badge: { text: 'PPI', color: 'blue' },
    content: {
      role: 'Creative Growth Intern',
      period: 'June 2025 - August 2025',
      description: 'Optimized growth for oral care D2C brand',
      achievements: [
        'Optimized 25+ SKUs for SEO and conversion',
        'Localized South India funnels',
        'Onboarded 40+ regional creators',
        'Reduced onboarding TAT by 50%',
        'Generated ₹5L/month in South India',
        'Led Birthday Sale: 30% of campaign revenue',
        '🏆 Pre-Placement Interview (PPI)'
      ],
      skills: ['SEO', 'Creator Marketing', 'CRO']
    }
  },
  {
    id: 'eleven-studios',
    title: 'Eleven Studios',
    icon: '🎨',
    type: 'internship',
    content: {
      role: 'Growth (Founding Team)',
      period: 'September 2025 - November 2025',
      description: 'Led growth for design-first startup',
      achievements: [
        '3,00,000+ LinkedIn impressions',
        '50% revenue growth contribution',
        'Interest from Ankur Warikoo',
        'Onboarded clients in India, Dubai, Singapore',
        '₹2L+ project revenue',
        'Scaled to ₹1.25L monthly revenue'
      ],
      skills: ['LinkedIn Growth', 'Client Acquisition']
    }
  },
  {
    id: 'kankyreacts',
    title: 'Kankyreacts',
    icon: '🎬',
    type: 'internship',
    content: {
      role: 'Social Media Manager',
      period: 'March 2026 · 1 month',
      description: '',
      achievements: [
        'Closed ₹1L+ in brand deals in a single month',
        'Improved average engagement rate from 1% to 3%',
        'Built outreach pipeline across food, skincare & tech brands',
        'Established per-reel pricing at ₹40–50K'
      ],
      skills: ['Brand Deals', 'Creator Monetization', 'Instagram Growth']
    }
  }
];

export const aboutLinksData = [
  {
    id: 'about-me',
    title: 'About Me',
    icon: '👤',
    type: 'about',
    isLink: false
  },
  {
    id: 'extracurriculars',
    title: 'Extracurriculars',
    icon: '🏆',
    type: 'extra',
    isLink: false
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: '💼',
    type: 'link',
    isLink: true,
    url: 'https://www.linkedin.com/in/manish-mohanty-7b76a918b/'
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: '📄',
    type: 'link',
    isLink: true,
    url: '/assets/resume.pdf'
  }
];

export const whatsNextData = [
  {
    id: 'future-plans',
    title: 'Next 2 Months',
    icon: '🎯',
    type: 'future',
    isLink: false
  },
  {
    id: 'growth-game',
    title: 'Growth Game',
    icon: '🎮',
    type: 'game',
    isLink: false
  },
  {
    id: 'review-deck',
    title: 'Review Deck',
    icon: '📊',
    type: 'link',
    isLink: true,
    url: '/assets/review-deck.pdf'
  }
];

// All projects flat (for window opening logic)
export const projectsData = [
  ...internshipsData,
  ...aboutLinksData,
  ...whatsNextData
];

export const statNotesData = [
  { id: 's1', value: '₹30K/mo', label: 'Meta budget managed', rotation: -4, top: 60, left: 40 },
  { id: 's2', value: '3,00,000+', label: 'LinkedIn impressions', rotation: 5, top: 170, left: 65 },
  { id: 's3', value: '120+', label: 'creators onboarded', rotation: -6, top: 285, left: 30 },
  { id: 's4', value: '4', label: 'internships', rotation: 3, top: 395, left: 55 }
];

export const terminalData = [
  '> status · actively looking',
  '> location · Delhi → Bangalore',
  '> role · Growth · open'
];

export const aboutData = {
  name: 'Manish Mohanty',
  tagline: 'Your Growth Guy',
  email: 'manishmohanty19@gmail.com',
  phone: '+91-8130625164',
  education: 'B.A. (Hons) Economics - Delhi College of Arts and Commerce, University of Delhi',
  bio: 'Recently turned 21. Drove growth at Zoop and Perfora. Numbers-first, ai pagluu, still figuring it out.',
  nextTwoMonths: [
    {
      icon: '✈️',
      title: 'Move to Bangalore',
      description: 'Relocating to India\'s startup capital ready to immerse myself in the tech ecosystem and build with the best.'
    },
    {
      icon: '🚀',
      title: 'Work at an AI Startup',
      description: 'Looking to join an early-stage startup where I can own growth end-to-end — ads, creators, funnels — and actually see the impact.'
    },
    {
      icon: '🎸',
      title: 'Something Fun',
      description: 'Learning guitar, finding Bangalore\'s best filter coffee, and beating my friend at FIFA. In that order. Roughly.'
    },
    {
      icon: '📚',
      title: 'Read 6 Books',
      description: '1 book every 10 days founder biographies, growth playbooks, and one sci-fi so my brain doesn\'t fully rot.'
    }
  ]
};

export const stickyNoteData = {
  line1: 'You miss 100% of the shots you don\'t take.',
  line2: '— Michael Scott'
};

export const extracurricularsData = {
  leadership: [
    'President at ECOLIBRIUM - Economics Department DCAC (Sept 2025 - Present)',
    'General Secretary at ECOLIBRIUM (Sept 2024 - July 2025)',
    'Led 250+ members and academic initiatives'
  ],
  competitions: [
    '1st place - Ecovision (Economics Debate, DCAC, DU)',
    '2nd place - Econfluence (Quiz, KMC, DU)',
    '3rd place - Sequence & Scandals (Case Competition, SGGSCC, DU)',
    'Top 5 / 500 teams – Eco-no-vision (LSR, DU)',
    'Top 5 / 1400 teams - National Case Competition (Hansraj College, DU)',
    'Special Mention – Shark Bowl (Startup Pitch, Ramjas College, DU)',
    'Special Mention - Fiscal Frenzy (Aryabhatta, DU)'
  ],
  events: [
    'Organized Econovision 2.0: 250+ participants, ₹10K prize pool',
    'Managed ECOLIBRIUM Annual Fests with ₹50K budget',
    'Coordinated CV-building Seminar with 50+ participants'
  ],
  other: [
    'Published article - "Love is on Sale" in Ecossential (Economics Newsletter)',
    '120 hrs community service - Project Tanzeal (NSS), teaching underprivileged children',
    '99 percentile – CUET (Mathematics & Economics)'
  ]
};

export const skillsData = [
  'Performance Marketing',
  'Meta & YouTube Ads',
  'Funnel Optimization',
  'Creator Marketing',
  'SEO & CRO',
  'Data Analysis',
  'Content Strategy',
  'Growth Hacking'
];

export const dadJokesAboutAI = [
  '😄 Dad: "Beta, AI ka full form kya hai? Arey Intelligent? Nahi nahi... Actually Interns!" (Actually Interns!)',
  '🤣 Dad: "ChatGPT se pucha maine ki tune mera lunch kaha rakha? Usne bola: I don\'t have access to that information!"',
  '😂 Dad: "AI itna smart hai ki apna hi code nahi samajhta. Bilkul mere jaisa!" (Just like me!)',
  '🙃 Dad: "Merlin AI? Matlab ab jadoo bhi AI karega? Hamare zamane mein toh manually jhadu marna padta tha!" (We had to sweep manually!)',
  '😆 Dad: "Thine app se yaad aata hai... Main toh khud apna naam bhool jata hoon. AI se zyada meri zaroorat hai!" (I need it more than AI!)',
  '🤪 Dad: "Machine Learning? Mere time pe toh machine hi seekhti thi. Hum toh bas ON-OFF button dhundte the!" (We just found the ON-OFF button!)',
  '😅 Dad: "Beta yeh AI ko data kyun chahiye? Hamare time pe toh Data matlab Date-Time hota tha calendar pe!" (Data meant date-time!)',
  '🥳 Dad: "AI bole toh Artificial Intelligence... Par ghar pe toh Natural Ignorance chal raha hai!" (Natural Ignorance at home!)'
];

export const funnyRejectedIdeas = dadJokesAboutAI;
