import {
  GraduationCap,
  Gavel,
  Landmark,
  BookOpenText
} from 'lucide-react';

export const ORG = {
  name: 'Canis Lupus Society Of Skill Based Education',
  shortName: 'CLSSBE',
  regLine: 'Registered under the Madhya Pradesh Society Registrikaran Adhiniyam, 1973',
  website: 'https://clssbe.org/',
  linkedin:
    'https://www.linkedin.com/company/canis-lupus-society-of-skill-based-education/about/',
  instagram: 'https://www.instagram.com/canis_lupus_society/',
  instagramHandle: '@canis_lupus_society',
  email: 'atcanislupussociety@gmail.com',
  phone: '+91 72229 21054',
  address: 'Ward no. 7, Padripani, Bijuri, Anuppur, Madhya Pradesh, 484440'
};

export const NAV_LINKS = [
  { label: 'Verticals', href: '#verticals' },
  { label: 'CSR & Tax Benefits', href: '#csr' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' }
];

export const HERO_SUMMARY =
  'Canis Lupus Society of Skill-Based Education (CLSSBE) is a registered educational society transforming learning through practical, skill-oriented development and inclusive initiatives. Established under MP Society Registrikaran Adhiniyam 1973, CLSSBE empowers students, young professionals, and lifelong learners with relevant competencies bridging academic knowledge and real-world effectiveness. We believe education must be accessible, meaningful, and tailored to modern socio-economic needs. Delivered via high-impact webinars, workshops, research projects, and community-centric programs, CLSSBE fosters critical thinking, practical skills, and leadership capacities across diverse disciplines to prepare a future-ready workforce.';

export const VERTICALS = [
  {
    id: 'skill-building',
    icon: GraduationCap,
    tag: 'Vertical 01',
    title: 'Skill & Capacity Building',
    description:
      'Regular technical training programs — Web Development, Python, Legal Research — targeting underprivileged youth and government school students to drive grassroot economic mobility.',
    metricLabel: 'Focus areas',
    metricValue: 'Web Dev · Python · Legal Research'
  },
  {
    id: 'moot-court',
    icon: Gavel,
    tag: 'Vertical 02',
    title: 'Moot Court Competitions',
    description:
      'Flagship events such as the 1st Space Law Moot Court Competition, giving pan-India law students a virtual advocacy platform for complex, emerging legal topics.',
    metricLabel: 'Flagship edition',
    metricValue: 'Space Law Moot, Edition I'
  },
  {
    id: 'yuva-sansad',
    icon: Landmark,
    tag: 'Vertical 03',
    title: 'Youth Parliament — Yuva Sansad',
    description:
      'Community-based civic learning formats encouraging vibrant political discussion, policy thinking, and leadership development among modern youth.',
    metricLabel: 'Format',
    metricValue: 'Civic debate & policy simulation'
  },
  {
    id: 'research',
    icon: BookOpenText,
    tag: 'Vertical 04',
    title: 'Research & Publications',
    description:
      'An active academic research wing running calls for research papers, interactive podcasts, and a specialised student blogging network.',
    metricLabel: 'Output',
    metricValue: 'Papers · Podcasts · Blogs'
  }
];

export const COMPLIANCE_BADGES = [
  {
    code: 'CSR-1',
    title: 'CSR Compliant',
    description:
      'Structured to receive and utilise Corporate Social Responsibility funding under Section 135 of the Companies Act, with dedicated reporting for partner organisations.'
  },
  {
    code: '80G',
    title: '80G Tax Exemption',
    description:
      'Donations to CLSSBE qualify for tax deduction under Section 80G of the Income Tax Act, reducing the effective cost of every contribution for corporate donors.'
  },
  {
    code: '12AB',
    title: '12AB Registration',
    description:
      "Registered under Section 12AB, confirming the Society's income applied to charitable, educational purposes is exempt — a core marker of financial legitimacy."
  }
];

export const IMPACT_ALLOCATION = [
  { label: 'Direct classroom delivery', percent: 55, note: 'Trainers, curriculum, on-ground workshops at government schools' },
  { label: 'Events & competitions', percent: 20, note: 'Moot courts, Yuva Sansad, quiz & research programming' },
  { label: 'Research & publications', percent: 15, note: 'Calls for papers, podcasts, blogging network' },
  { label: 'Administration & reporting', percent: 10, note: 'Governance, compliance, partner impact reports' }
];

export const PILLARS = [
  {
    title: 'Promote Skill-Based Legal Learning',
    color: 'bg-rust',
    text: 'text-cream'
  },
  {
    title: 'Create Meaningful Opportunities for Students & Professionals',
    color: 'bg-gold',
    text: 'text-charcoal'
  },
  {
    title: 'Build a Transparent and Impact-Driven Educational Community',
    color: 'bg-emerald-deep',
    text: 'text-cream'
  }
];

export const PAST_EVENTS = [
  {
    id: 'mind-mix',
    title: 'The Mind Mix',
    category: 'Wellbeing',
    date: '2025',
    description:
      'Online motivation, psychology & mental health session featuring mental health professionals including Ms. Annanya Singh.',
    tags: ['Webinar', 'Mental Health']
  },
  {
    id: 'think-lab',
    title: 'Think-Lab Quiz Competition',
    category: 'Competition',
    date: '2025',
    description:
      'A competitive quiz testing Law, Science & Reasoning through comprehensive legal case studies.',
    tags: ['Quiz', 'Law']
  },
  {
    id: 'contemporary-issues',
    title: 'Contemporary Educational Issues in India',
    category: 'Research',
    date: '2025',
    description:
      'A national call for papers, articles, and blogs examining pressing issues in Indian education.',
    tags: ['Call for Papers', 'Research']
  },
  {
    id: 'legal-drafting',
    title: 'From Classroom to Courtroom',
    category: 'Webinar',
    date: '2025',
    description:
      'A legal drafting webinar led by industry experts including Ms. Sakshi Kothari, covering corporate and litigation drafting skills.',
    tags: ['Drafting', 'Corporate Law']
  },
  {
    id: 'women-empowerment',
    title: 'Inequality to Inclusion: A New Era of Women\u2019s Empowerment',
    category: 'Panel',
    date: '2025',
    description:
      'A high-profile panel webinar featuring judicial officers including Mr. Vishal Vyas, Civil Judge & Judicial Magistrate.',
    tags: ['Panel', 'Women Empowerment']
  },
  {
    id: 'youth-week',
    title: 'Youth Week: The Vision of Swami Vivekananda',
    category: 'Community',
    date: '2025',
    description:
      'A celebration of Swami Vivekananda\u2019s vision featuring prominent social workers and record holders including Adv. Kajal Pandey.',
    tags: ['Community', 'Leadership']
  },
  {
    id: 'grassroots-gms-bijuri',
    title: 'Grassroots Workshop — G.M.S. Bijuri',
    category: 'On-Ground',
    date: '2025',
    description:
      'A formal educational workshop delivered directly at a government middle school, later covered across regional state newspapers.',
    tags: ['Government School', 'Press Coverage']
  }
];

export const EVENT_CATEGORIES = [
  'All',
  ...Array.from(new Set(PAST_EVENTS.map((e) => e.category)))
];

export const UPCOMING_EVENTS = [
  {
    id: 'up-1',
    title: '2nd Space Law Moot Court Competition',
    window: 'Sponsorship window open',
    description: 'Pan-India edition, expanding advocacy tracks to satellite governance and orbital debris law.'
  },
  {
    id: 'up-2',
    title: 'Yuva Sansad — District Chapter Expansion',
    window: 'Sponsorship window open',
    description: 'Extending the youth parliament format to three additional districts across Madhya Pradesh.'
  },
  {
    id: 'up-3',
    title: 'Government School Capacity-Building Circuit',
    window: 'Sponsorship window open',
    description: 'A rolling series of on-ground digital-literacy and legal-awareness workshops beyond G.M.S. Bijuri.'
  }
];

export const INVESTMENT_TIERS = [
  { value: 'seed', label: 'Seed Partner — Up to ₹1,00,000' },
  { value: 'growth', label: 'Growth Partner — ₹1,00,000 – ₹5,00,000' },
  { value: 'flagship', label: 'Flagship CSR Partner — ₹5,00,000+' },
  { value: 'inkind', label: 'In-kind / Mentorship Partner' }
];
