export interface Project {
  id: string; slug: string; title: string; client: string;
  category: string; filter: string; year: string;
  image: string; gradient: string; shortDesc: string;
  challenge: string; creativeDirection: string;
  process: { phase: string; detail: string }[];
  results: { label: string; value: string }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: '1', slug: '9th-collective-brand-identity',
    title: '9th Collective — Brand Identity Design',
    client: '9th Collective', category: 'Brand Identity', filter: 'Brand Identity', year: '2025',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600',
    gradient: 'from-lime-400 via-emerald-400 to-teal-400',
    shortDesc: 'Full brand identity system built to communicate authority and collective power.',
    challenge: 'The 9th Collective needed a brand that communicated strength, unity, and professional authority — something that made them look established from day one.',
    creativeDirection: 'I built a bold, structured identity system centered on clean geometry and strong typography — a mark that looks the same whether it\'s on a business card or a billboard.',
    process: [
      { phase: 'Research', detail: 'Studied the brand\'s values, target audience, and competitive landscape.' },
      { phase: 'Concept', detail: 'Developed 3 identity directions, explored mark variations and colour systems.' },
      { phase: 'Execution', detail: 'Delivered primary logo, sub-marks, colour palette, typography, and usage guidelines.' },
      { phase: 'Final Result', detail: 'A complete identity that positioned 9th Collective as a serious, premium brand.' },
    ],
    results: [
      { label: 'Brand Consistency', value: '100%' }, { label: 'Turnaround', value: '5 days' },
      { label: 'Assets Delivered', value: '20+' }, { label: 'Revision Rounds', value: '2' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600',
    ],
  },
  {
    id: '2', slug: 'milky-taste-eatery-social-media',
    title: 'Milky Taste Eatery — Social Media Suite',
    client: 'Milky Taste Eatery', category: 'Social Media Design', filter: 'Social Media Design', year: '2025',
    image: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?q=80&w=1600',
    gradient: 'from-amber-400 via-orange-400 to-rose-400',
    shortDesc: 'Conversion-oriented social media visuals designed to make you hungry and click.',
    challenge: 'Milky Taste Eatery had great food but their social media looked generic. They needed posts that stopped the scroll and drove orders.',
    creativeDirection: 'Our goal was one thing — Conversion Oriented Communication — while maintaining brand consistency. Warm food tones, clean layouts, strong CTAs.',
    process: [
      { phase: 'Research', detail: 'Audited existing posts, identified top-performing food content patterns on Instagram.' },
      { phase: 'Concept', detail: 'Designed a modular post system — menu posts, promo posts, quotes, and reels covers.' },
      { phase: 'Execution', detail: 'Created 20+ templates, a colour system, and typography guidelines for the brand.' },
      { phase: 'Final Result', detail: 'Consistent, professional feed that drove measurable increase in DMs and orders.' },
    ],
    results: [
      { label: 'Post Templates', value: '20+' }, { label: 'Engagement Lift', value: '+180%' },
      { label: 'Order DMs', value: 'Tripled' }, { label: 'Brand Consistency', value: 'Achieved' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?q=80&w=1600',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1600',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600',
    ],
  },
  {
    id: '3', slug: 'megalon-brand-identity',
    title: 'Megalon Beauty — Brand Identity System',
    client: 'Megalon Beauty Concern', category: 'Brand Identity', filter: 'Brand Identity', year: '2025',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600',
    gradient: 'from-fuchsia-500 via-purple-500 to-violet-500',
    shortDesc: 'Premium beauty brand identity and a full social media visual system.',
    challenge: 'Megalon Beauty needed to look premium and trustworthy in a market flooded with amateur beauty brands. First impressions had to scream quality.',
    creativeDirection: 'Elegant, feminine, and bold. We built a dual system — a polished brand identity that fed seamlessly into conversion-oriented social content.',
    process: [
      { phase: 'Research', detail: 'Analyzed the Nigerian beauty market, competitor brands, and target customer psychology.' },
      { phase: 'Concept', detail: 'Designed a clean, luxury mark with soft rose tones and strong serif typography.' },
      { phase: 'Execution', detail: 'Logo system, colour palette, social media visual templates, and product mockups.' },
      { phase: 'Final Result', detail: 'Megalon launched with a fully cohesive look — brand and social media working as one.' },
    ],
    results: [
      { label: 'Brand Assets', value: '30+' }, { label: 'Social Posts', value: '25+' },
      { label: 'Launch Impact', value: 'Strong' }, { label: 'Client Satisfaction', value: '5★' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600',
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1600',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1600',
    ],
  },
  {
    id: '4', slug: 'fays-skincentials-branding',
    title: "FAYS Skincentials — Social Media Branding",
    client: 'FAYS Skincentials', category: 'Social Media Design', filter: 'Social Media Design', year: '2026',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600',
    gradient: 'from-lime-400 via-green-400 to-emerald-400',
    shortDesc: 'A full social media branding system for a skincare brand with attitude.',
    challenge: 'FAYS Skincentials had a great product line but their social presence did not reflect their quality. Customers couldn\'t tell they were premium from a scroll.',
    creativeDirection: 'Clean, glowy, trustworthy. We designed a content system that made the skin results the star — bold before/after formats, product highlights, educational content.',
    process: [
      { phase: 'Research', detail: 'Studied skincare content that converts on Instagram and TikTok — what stops the scroll.' },
      { phase: 'Concept', detail: 'Built a visual content system: product posts, testimonial designs, educational carousels.' },
      { phase: 'Execution', detail: 'Delivered templates, colour guide, caption frameworks, and highlight covers.' },
      { phase: 'Final Result', detail: 'FAYS launched with a consistent, premium look that built trust fast.' },
    ],
    results: [
      { label: 'Templates Created', value: '18+' }, { label: 'Highlight Covers', value: '10' },
      { label: 'Brand Trust', value: 'Elevated' }, { label: 'DM Inquiries', value: '+250%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600',
    ],
  },
  {
    id: '5', slug: 'valentine-campaign-2026',
    title: 'Valentine Campaign Flyer Collection 2026',
    client: 'Multiple Clients', category: 'Campaign Visuals', filter: 'Campaign Visuals', year: '2026',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1600',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    shortDesc: 'A vibrant Valentine campaign flyer collection for multiple brands.',
    challenge: 'Multiple clients needed Valentine campaign assets that felt personal to their brand, not generic heart clipart.',
    creativeDirection: 'Bespoke Valentine visuals for each brand — adapting tone, palette, and style while keeping the love theme alive and converting.',
    process: [
      { phase: 'Research', detail: 'Reviewed each brand\'s identity and target audience for the season.' },
      { phase: 'Concept', detail: 'Designed unique concepts for each — from intimate to bold and vibrant.' },
      { phase: 'Execution', detail: 'Delivered print-ready and digital-optimized flyer sets per brand.' },
      { phase: 'Final Result', detail: 'All clients ran successful Valentine promotions with cohesive visuals.' },
    ],
    results: [
      { label: 'Brands Served', value: '6+' }, { label: 'Flyers Designed', value: '30+' },
      { label: 'Turnaround', value: '72hrs' }, { label: 'Repeat Orders', value: '4' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1600',
      'https://images.unsplash.com/photo-1500531279542-fc8490c8ea4d?q=80&w=1600',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600',
    ],
  },
  {
    id: '6', slug: 'event-branding-promo-prints',
    title: 'Event Branding & Promo Prints',
    client: 'Various Clients', category: 'Prints & Merch', filter: 'Prints & Merch', year: '2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600',
    gradient: 'from-violet-500 via-purple-500 to-indigo-400',
    shortDesc: 'Event branding assets, banners, flyers, and branded merchandise.',
    challenge: 'Events without proper branding look unprofessional. Clients needed assets that made their events look like something worth attending.',
    creativeDirection: 'Bold, unmissable event visuals — banners, tickets, programmes, and branded merch that carried the brand through every touchpoint of the event.',
    process: [
      { phase: 'Research', detail: 'Understood the event\'s tone, audience, and key messaging for each client.' },
      { phase: 'Concept', detail: 'Created full event branding packages with consistent visual language throughout.' },
      { phase: 'Execution', detail: 'Delivered print-ready files: banners, flyers, tickets, programmes, merch mockups.' },
      { phase: 'Final Result', detail: 'Events looked polished, premium, and brand-consistent from invitation to exit.' },
    ],
    results: [
      { label: 'Events Branded', value: '8+' }, { label: 'Print Formats', value: '12+' },
      { label: 'Client Referrals', value: '3' }, { label: 'Satisfaction', value: '5★' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600',
    ],
  },
]

export const services = [
  {
    id: '1', icon: 'Sparkles', title: 'Brand Identity',
    tagline: 'Make your brand unforgettable.',
    desc: 'Logo design, visual identity systems, brand guidelines, colour palettes, and typography — everything a brand needs to look like it means business.',
    includes: ['Logo & sub-mark design', 'Brand colour system', 'Typography selection', 'Brand guideline document', 'Social media kit'],
    price: 'From ₦80,000',
    for: 'New businesses, rebrands, serious founders.',
  },
  {
    id: '2', icon: 'Palette', title: 'Social Media Design',
    tagline: 'Content that stops the scroll.',
    desc: 'Strategic social media visuals — post templates, story covers, carousels, and campaign graphics designed to drive engagement and trust.',
    includes: ['Custom post templates', 'Story templates', 'Highlight covers', 'Content calendar support', 'Monthly design package'],
    price: 'From ₦50,000/month',
    for: 'Businesses wanting consistent, premium social presence.',
  },
  {
    id: '3', icon: 'Megaphone', title: 'Campaign Visuals',
    tagline: 'Launch campaigns that convert.',
    desc: 'High-impact visuals for product launches, promos, seasonal campaigns, and ads — designed to capture attention and push people to act.',
    includes: ['Campaign concept & strategy', 'Ad creatives (static & animated)', 'Flyers & promo graphics', 'Platform-optimized formats', 'Launch-ready file delivery'],
    price: 'From ₦60,000',
    for: 'Product launches, promos, seasonal marketing.',
  },
  {
    id: '4', icon: 'Star', title: 'Marketing Assets',
    tagline: 'Every touchpoint, covered.',
    desc: 'Business cards, letterheads, email signatures, pitch decks, and all the supporting assets that make your brand look cohesive everywhere.',
    includes: ['Business card design', 'Letterhead & email signature', 'Pitch deck templates', 'Digital & print formats', 'Brand collateral package'],
    price: 'From ₦35,000',
    for: 'Professionals, consultants, growing businesses.',
  },
  {
    id: '5', icon: 'Calendar', title: 'Event Branding',
    tagline: 'Make your event look like an event.',
    desc: 'Full event branding packages — banners, tickets, programmes, stage backdrops, and branded merchandise that carry your brand through every moment.',
    includes: ['Event logo/theme design', 'Banner & backdrop design', 'Ticket & programme design', 'Stage & venue branding', 'Merch mockups'],
    price: 'From ₦70,000',
    for: 'Corporate events, concerts, product launches, weddings.',
  },
  {
    id: '6', icon: 'Package', title: 'Prints & Merch',
    tagline: 'Your brand, on everything.',
    desc: 'T-shirts, mugs, tote bags, branded packaging, and physical touchpoints that make your brand tangible and memorable.',
    includes: ['Merch design (apparel, drinkware, bags)', 'Packaging design', 'Print-ready file delivery', 'Vendor liaison support', 'Mockup previews'],
    price: 'From ₦30,000',
    for: 'Brands wanting physical brand presence.',
  },
]

export const testimonials = [
  {
    id: '1', name: 'Chizaram N.', role: 'Founder', company: '9th Collective',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    quote: 'Daniels understood my brand from the first conversation. The identity he designed doesn\'t just look good — it communicates exactly what we stand for. Professional, fast, and really listened.',
    service: 'Brand Identity',
  },
  {
    id: '2', name: 'Adaeze K.', role: 'Owner', company: 'Milky Taste Eatery',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    quote: 'Since we started using Archworks for our social media, the DMs for orders have tripled. People keep saying our page looks so professional now. Worth every penny.',
    service: 'Social Media Design',
  },
  {
    id: '3', name: 'Femi A.', role: 'CEO', company: 'FAYS Skincentials',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
    quote: 'What I love most is that Daniels doesn\'t just make things pretty — he makes them work. Our social media now looks premium and customers trust us more because of it.',
    service: 'Social Media Branding',
  },
  {
    id: '4', name: 'Tochi M.', role: 'Creative Director', company: 'Megalon Beauty',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
    quote: 'The brand identity for Megalon was exactly what we needed. Clean, premium, and memorable. The social content system he built for us runs like a machine.',
    service: 'Brand Identity + Social Media',
  },
]

export const blogPosts = [
  { id: '1', slug: 'why-your-brand-looks-cheap', title: 'Why Your Brand Looks Cheap (And How to Fix It)', excerpt: 'Most brands in Nigeria lose customers before they say a word. Here\'s what your visuals are communicating — and how to change the narrative.', date: 'Jul 20, 2026', readTime: '5 min', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600', category: 'Branding' },
  { id: '2', slug: 'social-media-content-that-converts', title: 'Social Media Content That Actually Converts', excerpt: 'Pretty posts are not enough. This is the framework I use for every client to make sure their content does more than get likes.', date: 'Jul 12, 2026', readTime: '7 min', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600', category: 'Social Media' },
  { id: '3', slug: 'logo-vs-brand-identity', title: 'A Logo Is Not A Brand Identity — Know The Difference', excerpt: 'Many businesses think they have a brand when all they have is a logo. This post breaks down what a real identity system looks like.', date: 'Jul 5, 2026', readTime: '6 min', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600', category: 'Branding' },
  { id: '4', slug: 'design-nigeria-business-trust', title: 'How Design Builds Trust For Nigerian Businesses', excerpt: 'Trust is the currency of business in Nigeria. Here\'s how your visual identity either builds it or destroys it before you open your mouth.', date: 'Jun 28, 2026', readTime: '6 min', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600', category: 'Business' },
]
