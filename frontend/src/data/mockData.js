// Mock data for portfolio projects - restructured into sections

export const internshipsData = [
  {
    id: 'segwise-ai',
    title: 'Segwise AI',
    hint: "Jul '26 – now",
    icon: '🤖',
    logo: '/assets/segwise-logo.png',
    type: 'internship',
    content: {
      role: 'Growth Intern',
      period: 'July 2026 - Present',
      description: 'The problem: 15 SQLs a month and a domain rating of 47. Not enough people were finding the product, so I built content and distribution loops across YouTube, X, LinkedIn and Reddit.',
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
    id: 'kankyreacts',
    title: 'Kankyreacts',
    hint: "Apr–May '26",
    icon: '🔥',
    logo: '/assets/kanki-react-logo.png',
    type: 'internship',
    content: {
      role: 'Social Media Manager',
      period: 'April 2026 - May 2026',
      description: 'Social media manager for Kanky Reacts, a Hindi-English reaction creator with 50K+ followers on Instagram.',
      achievements: [
        'Closed ₹2L+ in brand deals in a single month',
        'Improved average engagement rate from 1% to 3%',
        'Built outreach pipelines across food, skincare, and tech brands'
      ],
      skills: ['Content Optimization', 'Brand Deals', 'Creator Outreach']
    }
  },
  {
    id: 'zoop-live',
    title: 'Zoop Live',
    hint: "Jan–Apr '26",
    icon: '📺',
    logo: '/assets/zoop-live-logo.svg',
    type: 'internship',
    badge: { text: 'PPO', color: 'gold' },
    content: {
      role: 'Growth Intern (Founder\'s Office)',
      period: 'January 2026 - April 2026',
      description: 'A two-sided live-commerce marketplace: win sellers and buyers on ₹30K/month of Meta. I ran performance marketing for both sides.',
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
    id: 'eleven-studios',
    title: 'Eleven Studios',
    hint: "Sep–Nov '25",
    icon: '🎨',
    logo: '/assets/eleven-studios-logo.png',
    type: 'internship',
    content: {
      role: 'Growth (Founding Team)',
      period: 'September 2025 - November 2025',
      description: 'Founding team at a design-first startup. No playbook: I built the outbound and inbound funnels that brought in clients.',
      achievements: [
        'Onboarded 4 clients across India, Dubai, and Singapore, generating ₹1.5L+ project revenue',
        'Scaled to ₹1.25L monthly revenue'
      ],
      skills: ['Outbound Funnels', 'Inbound Funnels', 'Client Acquisition']
    }
  },
  {
    id: 'perfora',
    title: 'Perfora',
    hint: "Jun–Aug '25",
    icon: '🛍️',
    logo: '/assets/perfora-logo.svg',
    type: 'internship',
    badge: { text: 'PPO', color: 'gold' },
    content: {
      role: 'Creative Growth Intern',
      period: 'June 2025 - August 2025',
      description: 'Oral-care D2C brand. South India needed its own funnel, so I built it: regional messaging, creators, PDPs and landing pages.',
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
    url: '/manish-mohanty-resume.pdf'
  },
  {
    id: 'perfora-deck',
    title: 'Perfora Deck',
    icon: '📄',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    pixelIcon: 'perforaDeck',
    url: '/manish-mohanty-perfora-deck.pdf'
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

// mailto: works with any mail client; the address is also shown as text so it can be copied
export const emailComposeUrl = (subject = '') =>
  `mailto:${contactLinks.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

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
  { id: 's1', value: '₹5L/mo', label: 'South India revenue', source: 'Perfora', opens: 'perfora', rotation: -4, top: 60, left: 40 },
  { id: 's2', value: '2 PPOs', label: 'pre-placement offers', source: 'Zoop Live + Perfora', opens: 'zoop-live', rotation: 5, top: 170, left: 65 },
  { id: 's3', value: 'SQLs +40%', label: '15 to 21 in one month', source: 'Segwise AI', opens: 'segwise-ai', rotation: -6, top: 285, left: 30 },
  { id: 's4', value: '22.8M+', label: 'organic views · ~65K comments', source: 'Perfora + Zoop reels', opens: 'viral-content', rotation: 3, top: 395, left: 55 }
];

export const terminalData = [
  '> now · segwise ai',
  '> location · Delhi · Bangalore',
  '> open to · growth roles'
];

export const aboutData = {
  name: 'Manish Mohanty',
  tagline: 'Growth Generalist',
  focus: 'Creators · Paid ads · Organic & AI search · Outbound',
  email: 'manishmohanty19@gmail.com',
  education: 'B.A. (Hons) Economics, Delhi College of Arts and Commerce, University of Delhi (2023–2026)',
  bio: 'Growth Intern at Segwise AI. Before that, Perfora and Zoop Live, with Pre-Placement Offers at both. A growth generalist: creator-led content, Meta & YouTube ads, organic / AI-search distribution and outbound. Numbers-first.',
  nextTwoMonths: [
    {
      icon: '📣',
      title: 'Work in Distribution',
      description: 'A full-time growth role at a fast-growing startup in Delhi or Bangalore, putting products and content in front of the right audience.'
    },
    {
      icon: '🔁',
      title: 'Learn Retention',
      description: 'My wins are all acquisition and distribution. Retention, lifecycle and CRM are the gap I want to close next.'
    },
    {
      icon: '📚',
      title: 'Read 6 Books',
      description: '1 a month: founder biographies, growth playbooks, and one sci-fi so my brain doesn\'t fully rot.'
    },
    {
      icon: '🍛',
      title: 'Side quest: Meghana Biryani',
      description: 'Finally make the pilgrimage for a proper plate of Meghana Biryani.'
    }
  ]
};

export const stickyNoteData = {
  title: 'Looking for',
  lines: [
    'Full-time growth role at a fast-growing startup',
    'Delhi or Bangalore',
    'Generalist: creators, paid, organic & outbound'
  ],
  cta: 'What I want next →'
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
