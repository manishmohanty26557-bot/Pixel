// Mock data for portfolio projects - restructured into sections

export const internshipsData = [
  {
    id: 'segwise-ai',
    title: 'Segwise AI',
    icon: '🤖',
    logo: '/assets/segwise-logo.png',
    type: 'internship',
    content: {
      role: 'Growth Intern',
      period: 'July 2026 - Present',
      description: 'Built content systems and distribution loops for an AI product',
      achievements: [
        'Built content workflows for YouTube, X, LinkedIn, and Reddit, generating 200+ LLM citations',
        'Increased organic searches from 2,704 to 3,708 through multi-platform content distribution and backlink exchanges',
        'Improved domain ranking from 47 to 54 through 30+ monthly backlink exchanges',
        'Increased SQL bookings from 15 to 21 in one month through improved organic visibility and domain authority',
        'Built recurring backlink outreach using Instantly and HeyReach',
        'Developed Claude skills to automate script-writing across YouTube, X, Instagram, LinkedIn, and Reddit'
      ],
      skills: ['Content Distribution', 'Automation', 'Analytics']
    }
  },
  {
    id: 'zoop-live',
    title: 'Zoop Live',
    icon: '📺',
    logo: '/assets/zoop-live-logo.svg',
    type: 'internship',
    badge: { text: 'PPO', color: 'gold' },
    content: {
      role: 'Growth Intern (Founder\'s Office)',
      period: 'January 2026 - April 2026',
      description: 'Led performance marketing initiatives for live commerce platform',
      achievements: [
        'Ran YouTube ads for 20 live sellers, maintaining CPC < ₹2',
        'Managed ₹30K/month Meta ads budget, achieving ₹1.78 cost per result through creative testing and funnel optimization',
        'Scaled Facebook from 60K to 100K followers using shorts-led distribution and performance marketing',
        'Built and scripted an end-to-end influencer pipeline and designed separate funnels for buyers and sellers',
        'Developed 3 in-house YouTube channels via shorts, ads, and lives, scaling each to 1K+ subscribers',
        'Built Slack bots to track daily Meta ad spend, sales team performance, and top influencer videos',
        '🏆 Pre-Placement Offer (PPO) based on performance and impact'
      ],
      skills: ['Short-form Content', 'Creative Testing', 'Funnel Optimization', 'Automation']
    }
  },
  {
    id: 'perfora',
    title: 'Perfora',
    icon: '🛍️',
    logo: '/assets/perfora-logo.svg',
    type: 'internship',
    badge: { text: 'PPO', color: 'gold' },
    content: {
      role: 'Creative Growth Intern',
      period: 'June 2025 - August 2025',
      description: 'Optimized growth for oral care D2C brand',
      achievements: [
        'Optimized 25+ SKUs by improving PDPs, images, and FAQs for SEO and conversion',
        'Localized South India funnels through regional messaging, creatives, and landing pages',
        'Onboarded 40+ regional creators at ₹5K per creator through targeted outreach and negotiation',
        'Reduced creator onboarding TAT by 50% through SOPs, achieving a 90% acceptance rate',
        'Generated ₹5L/month in South India through creator-led growth and PDP optimization',
        'Improved CTR and funnel efficiency by testing 25+ ad scripts using CTR and hook-rate analysis',
        'Led the South India Birthday Sale, driving 30% of total birthday campaign revenue',
        '🏆 Awarded a Pre-Placement Offer (PPO) based on performance and impact'
      ],
      skills: ['Creator Marketing', 'Creative Testing', 'CRO']
    }
  },
  {
    id: 'eleven-studios',
    title: 'Eleven Studios',
    icon: '🎨',
    logo: '/assets/eleven-studios-logo.png',
    type: 'internship',
    content: {
      role: 'Growth (Founding Team)',
      period: 'September 2025 - November 2025',
      description: 'Led growth for design-first startup',
      achievements: [
        'Onboarded 4 clients across India, Dubai, and Singapore, generating ₹1.5L+ project revenue',
        'Scaled to ₹1.25L monthly revenue'
      ],
      skills: ['Outbound Funnels', 'Inbound Funnels', 'Client Acquisition']
    }
  },
  {
    id: 'kankyreacts',
    title: 'Kankyreacts',
    icon: '🔥',
    logo: '/assets/kanki-react-logo.png',
    type: 'internship',
    content: {
      role: 'Social Media Manager',
      period: 'April 2026 - May 2026',
      description: '',
      achievements: [
        'Closed ₹1L+ in brand deals in a single month',
        'Improved average engagement rate from 1% to 3%',
        'Built outreach pipelines across food, skincare, and tech brands'
      ],
      skills: ['Content Optimization', 'Brand Deals', 'Creator Outreach']
    }
  }
];

export const aboutLinksData = [
  {
    id: 'about-me',
    pixelIcon: 'aboutMe',
    title: 'About Me',
    icon: '👤',
    type: 'about',
    isLink: false
  },
  {
    id: 'extracurriculars',
    pixelIcon: 'activities',
    title: 'Activities',
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
    openInNewTab: true,
    pixelIcon: 'linkedin',
    url: 'https://www.linkedin.com/in/manish-mohanty-7b76a918b/'
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: '📄',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    pixelIcon: 'resume',
    url: 'https://www.dropbox.com/scl/fi/jabr2bqqaz7kbnlwjtidl/cv-manish-updated-new-1.pdf?rlkey=onujq4njzfsy6tce9vf81ke88&st=h0e64rj4&dl=0'
  },
  {
    id: 'perfora-deck',
    title: 'Perfora Deck',
    icon: '📄',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    pixelIcon: 'perforaDeck',
    url: 'https://tinyurl.com/4zrnpsvn'
  },
  {
    id: 'viral-content',
    title: 'Viral Content',
    icon: '🎬',
    type: 'viral',
    pixelIcon: 'viralContent'
  }
];

export const contactLinks = {
  resume: aboutLinksData.find(l => l.id === 'resume').url,
  linkedin: aboutLinksData.find(l => l.id === 'linkedin').url,
  email: 'manishmohanty19@gmail.com'
};

// Opens Gmail compose in the browser; mailto: does nothing without a mail app
export const emailComposeUrl = (subject = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${contactLinks.email}${subject ? `&su=${encodeURIComponent(subject)}` : ''}`;

export const whatsNextData = [
  {
    id: 'future-plans',
    pixelIcon: 'nextSixMonths',
    title: 'Next 6 Months',
    hint: 'What I want to do next',
    icon: '🎯',
    type: 'future',
    isLink: false
  },
  {
    id: 'growth-game',
    pixelIcon: 'growthGame',
    title: 'Growth Game',
    hint: 'Play: Catch the Lead',
    icon: '🎮',
    type: 'game',
    isLink: false
  }
];

// All projects flat (for window opening logic)
export const projectsData = [
  ...internshipsData,
  ...aboutLinksData,
  ...whatsNextData
];

export const statNotesData = [
  { id: 's1', value: '30+', label: 'scripts written', rotation: -4, top: 60, left: 40 },
  { id: 's2', value: '200+', label: 'LLM citations generated', rotation: 5, top: 170, left: 65 },
  { id: 's3', value: '120+', label: 'creators onboarded', rotation: -6, top: 285, left: 30 },
  { id: 's4', value: '4', label: 'internships', rotation: 3, top: 395, left: 55 }
];

export const terminalData = [
  '> status · actively looking',
  '> location · Delhi · Bangalore',
  '> role · Growth · open'
];

export const aboutData = {
  name: 'Manish Mohanty',
  tagline: 'Your Growth Guy',
  email: 'manishmohanty19@gmail.com',
  phone: '+91-8130625164',
  education: 'B.A. (Hons) Economics - Delhi College of Arts and Commerce, University of Delhi (6.84 CGPA) | Class XII: 88.6% | Class X: 94.7% - Air Force Bal Bharti School, Lodhi Road',
  bio: 'Recently turned 21. Drove growth at Zoop and Perfora. Numbers-first, ai pagluu, still figuring it out.',
  nextTwoMonths: [
    {
      icon: '🏠',
      title: 'Shift to a Flat',
      description: 'Move into my own place in Bangalore and make a flat feel like home.'
    },
    {
      icon: '🍛',
      title: 'Have Meghana Biryani',
      description: 'Finally make the pilgrimage for a proper plate of Meghana Biryani.'
    },
    {
      icon: '📣',
      title: 'Work in Distribution',
      description: 'Get better at putting products and content in front of the right audience.'
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
    'President at ECOLIBRIUM - Economics Department, DCAC (September 2025 - June 2026)',
    'Organized Econovision 2.0, an inter-college case competition with 250+ DU participants and a ₹10,000 prize pool',
    'Oversaw budgeting, sponsorship, and logistics, achieving a 40% rise in event participation',
    'Expanded ECOLIBRIUM visibility to 20+ colleges and improved event satisfaction scores'
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
    'Organized Econovision 2.0: 250+ DU participants and a ₹10,000 prize pool'
  ],
  other: [
    '99 percentile - CUET (Mathematics & Economics)',
    'Published article - "Love is on Sale"'
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
