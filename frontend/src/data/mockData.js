// Mock data for portfolio projects
export const projectsData = [
  // Growth Strategies for Thine & Merlin
  {
    id: 'meta-ads-strategy',
    title: 'Meta Ads Scale',
    icon: '📱',
    type: 'strategy',
    position: { x: 80, y: 90 },
    content: {
      role: 'Growth Strategy for Merlin AI',
      description: 'Scale Merlin\'s Meta Ads with AI Video Creatives',
      details: 'Weekly AI-generated ad creatives via HeyGen, tested and optimised on a 3-day kill-or-scale cycle. Leverage AI to produce high-converting video content at scale while maintaining low CPR.',
      keyPoints: [
        'AI-powered video creative generation using HeyGen',
        '3-day test cycles for rapid optimization',
        'Automated creative testing framework',
        'Scale winning creatives aggressively',
        'Maintain CPR < ₹2 through constant iteration'
      ]
    }
  },
  {
    id: 'influencer-pipeline',
    title: 'UGC Pipeline',
    icon: '🎬',
    type: 'strategy',
    position: { x: 220, y: 90 },
    content: {
      role: 'Growth Strategy for Merlin & Thine',
      description: 'End-to-End Influencer Marketing / UGC Pipeline',
      details: 'Creator discovery, scripting, briefing, and posting - targeting micro-creators under 50K with 100+ avg comments. Extend to Thine to increase waitlist signups.',
      keyPoints: [
        'Target micro-creators (under 50K followers)',
        'High engagement rate (100+ comments)',
        'Complete creator workflow: discovery → scripting → posting',
        'YouTube, Instagram, and TikTok coverage',
        'Scalable to drive Thine waitlist growth'
      ]
    }
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp AI',
    icon: '💬',
    type: 'strategy',
    position: { x: 360, y: 90 },
    content: {
      role: 'Growth Strategy for Both',
      description: 'WhatsApp Marketing via AI Sensy',
      details: 'Run WhatsApp Activation and Retention campaigns via AI Sensy. Convert Thine\'s waitlist to activated users and Merlin\'s free users to paid through personalised messages.',
      keyPoints: [
        'AI-powered personalized messaging',
        'Waitlist → Active user conversion for Thine',
        'Free → Paid conversion for Merlin',
        'Automated retention campaigns',
        'High-intent user targeting'
      ]
    }
  },
  {
    id: 'proof-of-context',
    title: 'Proof of Context',
    icon: '🧠',
    type: 'strategy',
    position: { x: 500, y: 90 },
    content: {
      role: 'Growth Strategy for Thine',
      description: 'Weekly Posts of Real User Stories',
      details: 'Post real users asking Thine about something they couldn\'t remember, on Twitter and LinkedIn. Builds trust and showcases product value authentically.',
      keyPoints: [
        'User-generated content strategy',
        'Twitter + LinkedIn distribution',
        'Authentic product demonstrations',
        'Trust-building through real stories',
        'Weekly posting cadence'
      ]
    }
  },
  {
    id: 'youtube-scaling',
    title: 'YouTube Scale',
    icon: '📹',
    type: 'strategy',
    position: { x: 640, y: 90 },
    content: {
      role: 'Growth Strategy for Both',
      description: 'Scale YouTube through Shorts and Ads',
      details: '1 daily Short per channel using AI, and run weekly ads behind organic winners to improve SEO and engagement of future campaigns.',
      keyPoints: [
        'AI-generated Shorts (1 per day per channel)',
        'Organic content amplified with ads',
        'SEO optimization through consistent posting',
        'Engagement boost for future campaigns',
        'Multiple channels for both products'
      ]
    }
  },
  
  // Internship Experiences
  {
    id: 'zoop-live',
    title: 'Zoop Live',
    icon: '📺',
    type: 'internship',
    position: { x: 80, y: 270 },
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
    position: { x: 220, y: 270 },
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
    position: { x: 360, y: 270 },
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
  
  // About & Links
  {
    id: 'about-me',
    title: 'About Me',
    icon: '👤',
    type: 'about',
    position: { x: 80, y: 450 },
    isLink: false
  },
  {
    id: 'extracurriculars',
    title: 'Extracurriculars',
    icon: '🏆',
    type: 'extra',
    position: { x: 220, y: 450 },
    isLink: false
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: '💼',
    type: 'link',
    position: { x: 360, y: 450 },
    isLink: true,
    url: 'https://www.linkedin.com/in/manish-mohanty-7b76a918b/'
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: '📄',
    type: 'link',
    position: { x: 500, y: 450 },
    isLink: true,
    url: 'https://tinyurl.com/4pxm97pn'
  },
  {
    id: 'review-deck',
    title: 'Review Deck',
    icon: '📊',
    type: 'link',
    position: { x: 640, y: 450 },
    isLink: true,
    url: 'https://tinyurl.com/4zrnpsvn'
  }
];

export const aboutData = {
  name: 'Manish Mohanty',
  tagline: 'Your Growth Guy',
  email: 'manishmohanty19@gmail.com',
  phone: '+91-8130625164',
  education: 'B.A. (Hons) Economics - Delhi College of Arts and Commerce, University of Delhi',
  bio: 'Recently turned 21, drove growth at Zoop & Perfora, and have been following what you\'re building at Merlin and Thine. Growth & Performance Marketing Specialist with proven track record of driving revenue through data-driven strategies across multiple startups.'
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
