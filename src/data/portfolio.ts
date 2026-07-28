export interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  filter: string
  year: string
  image: string
  gradient: string
  shortDesc: string
  challenge: string
  creativeDirection: string
  process: { phase: string; detail: string }[]
  results: { label: string; value: string }[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: '1', slug: 'luxe-beauty-rebrand', title: 'Luxe Beauty — Brand Rebirth', client: 'Luxe Beauty Co.',
    category: 'Branding', filter: 'Branding', year: '2025',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600',
    gradient: 'from-amber-600 via-rose-500 to-purple-600',
    shortDesc: 'A complete visual identity overhaul for a premium beauty brand.',
    challenge: 'Luxe Beauty had a dated brand identity that failed to communicate their premium positioning. They were losing market share to newer, more visually-driven competitors on social media.',
    creativeDirection: 'We developed a concept around "gilded elegance" — combining soft gold tones with editorial photography to create a luxury feel that translated beautifully across Instagram, packaging, and digital touchpoints.',
    process: [
      { phase: 'Research', detail: 'Analyzed competitor visual languages, audited 200+ social posts, and surveyed 500 customers on brand perception.' },
      { phase: 'Concept', detail: 'Developed 3 design directions, refined the gold-accent system, and created mood boards for each touchpoint.' },
      { phase: 'Execution', detail: 'Designed the full identity — logo system, color palette, typography, social templates, and packaging design.' },
      { phase: 'Final Result', detail: 'Delivered a 40-page brand guideline, 30 social media templates, and art direction for the launch campaign.' },
    ],
    results: [
      { label: 'Engagement Increase', value: '+320%' }, { label: 'Follower Growth', value: '+85K' },
      { label: 'Brand Recall', value: '+45%' }, { label: 'Sales Lift', value: '+28%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1600',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600',
    ],
  },
  {
    id: '2', slug: 'techflow-social-campaign', title: 'TechFlow — Product Launch Campaign', client: 'TechFlow Systems',
    category: 'Social Media Design', filter: 'Social Media', year: '2025',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600',
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    shortDesc: 'A 30-day social media campaign for a SaaS product launch.',
    challenge: 'TechFlow needed to generate buzz for their new project management tool in a crowded market dominated by established players.',
    creativeDirection: 'We created a "flow state" visual concept — using dynamic gradient meshes and clean UI mockups to show how the product creates seamless workflows.',
    process: [
      { phase: 'Research', detail: 'Studied the SaaS social media landscape, identified content gaps, and mapped the 30-day campaign journey.' },
      { phase: 'Concept', detail: 'Designed a modular content system with teaser, reveal, demo, testimonial, and CTA content pillars.' },
      { phase: 'Execution', detail: 'Created 60+ social posts, 5 motion graphics videos, and interactive story templates.' },
      { phase: 'Final Result', detail: 'The campaign drove 12K signups in the first week and trended on LinkedIn for 3 days.' },
    ],
    results: [
      { label: 'Impressions', value: '2.4M' }, { label: 'Click-through Rate', value: '4.8%' },
      { label: 'New Signups', value: '12K' }, { label: 'Cost per Acquisition', value: '-40%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
    ],
  },
  {
    id: '3', slug: 'aurora-fashion-campaign', title: 'Aurora — Fashion Week Campaign', client: 'Aurora Couture',
    category: 'Marketing Campaigns', filter: 'Campaigns', year: '2024',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600',
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    shortDesc: 'A full marketing campaign for a fashion week runway show.',
    challenge: 'Aurora needed to create pre-show buzz and drive attendance to their Paris Fashion Week runway event.',
    creativeDirection: 'We built a "midnight bloom" concept — dark, moody visuals with floral overlays that captured the collection\'s aesthetic and built anticipation.',
    process: [
      { phase: 'Research', detail: 'Analyzed fashion week digital trends and the brand\'s previous campaign performance.' },
      { phase: 'Concept', detail: 'Created a teaser series with countdown visuals, model portraits, and behind-the-scenes content.' },
      { phase: 'Execution', detail: 'Designed 40+ campaign assets across Instagram, TikTok, email, and digital billboards.' },
      { phase: 'Final Result', detail: 'The show sold out in 48 hours and generated 15M+ social impressions.' },
    ],
    results: [
      { label: 'Social Reach', value: '15M' }, { label: 'Event Sold Out In', value: '48hrs' },
      { label: 'Press Features', value: '23' }, { label: 'Engagement Rate', value: '11.2%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600',
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1600',
    ],
  },
  {
    id: '4', slug: 'nomad-coffee-identity', title: 'Nomad Coffee — Visual Identity', client: 'Nomad Coffee Roasters',
    category: 'Branding', filter: 'Branding', year: '2024',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600',
    gradient: 'from-amber-700 via-orange-600 to-yellow-500',
    shortDesc: 'A warm, artisanal brand identity for a specialty coffee roaster.',
    challenge: 'Nomad Coffee needed a brand identity that stood out in the specialty coffee market while communicating their nomadic, adventurous spirit.',
    creativeDirection: 'We developed a "wandering artisan" concept — hand-drawn elements combined with bold typography to create a brand that felt both crafted and modern.',
    process: [
      { phase: 'Research', detail: 'Visited roasteries, studied coffee culture trends, and audited 50+ competitor brands.' },
      { phase: 'Concept', detail: 'Created a logo system with a nomad compass icon, warm color palette, and custom illustrations.' },
      { phase: 'Execution', detail: 'Designed packaging, social templates, signage, and merchandise.' },
      { phase: 'Final Result', detail: 'Nomad Coffee launched in 3 locations and built a 40K Instagram following in 6 months.' },
    ],
    results: [
      { label: 'Brand Mentions', value: '8.5K' }, { label: 'Instagram Growth', value: '40K' },
      { label: 'Locations Opened', value: '3' }, { label: 'Revenue Increase', value: '+65%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600',
      'https://images.unsplash.com/photo-1442550528053-c431ecb55509?q=80&w=1600',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2086?q=80&w=1600',
    ],
  },
  {
    id: '5', slug: 'pulse-fitness-posters', title: 'Pulse Fitness — Poster Series', client: 'Pulse Fitness Club',
    category: 'Posters', filter: 'Posters', year: '2025',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600',
    gradient: 'from-red-600 via-orange-500 to-yellow-400',
    shortDesc: 'A high-energy poster series for a premium fitness brand.',
    challenge: 'Pulse Fitness needed visually striking posters to promote their new HIIT program across the city.',
    creativeDirection: 'We created an "energy burst" concept — dynamic typography crashing through barriers with explosive color combinations.',
    process: [
      { phase: 'Research', detail: 'Studied fitness advertising trends and the brand\'s competitive positioning.' },
      { phase: 'Concept', detail: 'Developed 5 poster concepts with motion-inspired layouts and bold color blocking.' },
      { phase: 'Execution', detail: 'Designed 12 poster variants for print, digital, and social formats.' },
      { phase: 'Final Result', detail: 'The campaign drove a 45% increase in trial signups and the posters went viral on social.' },
    ],
    results: [
      { label: 'Trial Signups', value: '+45%' }, { label: 'Social Shares', value: '32K' },
      { label: 'Poster Views', value: '1.2M' }, { label: 'Conversion Rate', value: '8.3%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600',
    ],
  },
  {
    id: '6', slug: 'zenith-logo-system', title: 'Zenith — Logo Design System', client: 'Zenith Properties',
    category: 'Logos', filter: 'Logos', year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
    gradient: 'from-slate-600 via-gray-500 to-zinc-400',
    shortDesc: 'A sophisticated logo system for a luxury real estate brand.',
    challenge: 'Zenith Properties needed a logo system that conveyed trust, luxury, and modernity across all touchpoints.',
    creativeDirection: 'We created a "rising peak" concept — a geometric mark that abstractly represents a mountain peak, symbolizing aspiration and achievement.',
    process: [
      { phase: 'Research', detail: 'Analyzed luxury real estate branding and surveyed target demographics.' },
      { phase: 'Concept', detail: 'Developed 8 logo directions, refined to a geometric mark with a gold gradient system.' },
      { phase: 'Execution', detail: 'Created the primary logo, secondary marks, monogram, and responsive variants.' },
      { phase: 'Final Result', detail: 'The new identity elevated Zenith to a premium market position and won a design award.' },
    ],
    results: [
      { label: 'Brand Perception', value: '+60%' }, { label: 'Inquiries', value: '+35%' },
      { label: 'Design Award', value: 'Won' }, { label: 'Market Position', value: 'Top 5' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
      'https://images.unsplash.com/photo-1486406146926-c627a92d1c5b?q=80&w=1600',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600',
    ],
  },
  {
    id: '7', slug: 'wave-finance-ui', title: 'Wave Finance — App UI Design', client: 'Wave Finance',
    category: 'UI Design', filter: 'UI Design', year: '2025',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600',
    gradient: 'from-indigo-600 via-blue-500 to-cyan-400',
    shortDesc: 'A clean, intuitive fintech app interface for a mobile banking platform.',
    challenge: 'Wave Finance needed a mobile app UI that made complex financial data feel simple and approachable.',
    creativeDirection: 'We designed a "calm finance" concept — clean cards, soft shadows, and a data visualization system that made numbers feel friendly.',
    process: [
      { phase: 'Research', detail: 'Conducted user interviews, analyzed 15 fintech apps, and mapped user journeys.' },
      { phase: 'Concept', detail: 'Created wireframes, designed a component system, and prototyped key flows.' },
      { phase: 'Execution', detail: 'Designed 60+ screens, a full design system, and interactive prototypes.' },
      { phase: 'Final Result', detail: 'The app launched with a 4.8-star rating and 100K downloads in the first month.' },
    ],
    results: [
      { label: 'App Store Rating', value: '4.8★' }, { label: 'Downloads', value: '100K' },
      { label: 'User Retention', value: '72%' }, { label: 'Daily Active Users', value: '45K' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
    ],
  },
  {
    id: '8', slug: 'bloom-content-creation', title: 'Bloom — Social Content System', client: 'Bloom Wellness',
    category: 'Content Creation', filter: 'Social Media', year: '2025',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600',
    gradient: 'from-green-500 via-emerald-400 to-teal-400',
    shortDesc: 'A complete social media content system for a wellness brand.',
    challenge: 'Bloom Wellness needed a consistent, beautiful social media presence but lacked the design resources to maintain it.',
    creativeDirection: 'We built a "natural calm" visual system — organic shapes, soft greens, and lifestyle photography that made wellness feel accessible.',
    process: [
      { phase: 'Research', detail: 'Audited their existing content, analyzed wellness industry trends, and studied audience engagement patterns.' },
      { phase: 'Concept', detail: 'Created a modular content template system with quote posts, tips, recipes, and lifestyle content.' },
      { phase: 'Execution', detail: 'Designed 80+ templates, a content calendar system, and style guidelines.' },
      { phase: 'Final Result', detail: 'Bloom\'s engagement tripled and they gained 120K followers in 4 months.' },
    ],
    results: [
      { label: 'Engagement Rate', value: '9.5%' }, { label: 'Follower Growth', value: '+120K' },
      { label: 'Reach Increase', value: '+400%' }, { label: 'Saves & Shares', value: '85K' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600',
    ],
  },
  {
    id: '9', slug: 'vertex-marketing-graphics', title: 'Vertex — Marketing Graphics Suite', client: 'Vertex Tech',
    category: 'Marketing Campaigns', filter: 'Campaigns', year: '2024',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600',
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    shortDesc: 'A complete marketing graphics suite for a B2B tech company.',
    challenge: 'Vertex needed to refresh their marketing collateral to match their product evolution and appeal to a broader audience.',
    creativeDirection: 'We created a "precision geometry" system — clean lines, data-inspired patterns, and a bold purple accent that felt both technical and premium.',
    process: [
      { phase: 'Research', detail: 'Reviewed all existing marketing materials and interviewed the sales team about customer objections.' },
      { phase: 'Concept', detail: 'Developed a modular graphics system that could adapt across ads, decks, and landing pages.' },
      { phase: 'Execution', detail: 'Created 50+ marketing assets including ads, one-pagers, presentation templates, and email headers.' },
      { phase: 'Final Result', detail: 'Vertex saw a 35% increase in lead quality and 2x faster sales cycle.' },
    ],
    results: [
      { label: 'Lead Quality', value: '+35%' }, { label: 'Sales Cycle', value: '-50%' },
      { label: 'Ad CTR', value: '5.2%' }, { label: 'Demo Requests', value: '+70%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600',
      'https://images.unsplash.com/photo-1542744173-8e7e5785d422?q=80&w=1600',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
    ],
  },
  {
    id: '10', slug: 'meridian-visual-identity', title: 'Meridian — Visual Identity System', client: 'Meridian Studios',
    category: 'Branding', filter: 'Branding', year: '2025',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600',
    gradient: 'from-cyan-600 via-blue-500 to-indigo-500',
    shortDesc: 'A modern visual identity for a creative production studio.',
    challenge: 'Meridian Studios needed a brand that reflected their versatility across film, photography, and digital production.',
    creativeDirection: 'We built a "horizon line" concept — a flexible identity system that shifts and adapts like a horizon, representing their range of creative services.',
    process: [
      { phase: 'Research', detail: 'Studied production studio branding, analyzed the competitive landscape, and defined brand personality.' },
      { phase: 'Concept', detail: 'Created an adaptive logo system with horizon-inspired graphic elements and a cinematic color palette.' },
      { phase: 'Execution', detail: 'Designed the full identity, website visuals, social templates, and showreel packaging.' },
      { phase: 'Final Result', detail: 'Meridian landed 3 major clients within 2 months of the rebrand launch.' },
    ],
    results: [
      { label: 'New Clients', value: '3' }, { label: 'Brand Inquiries', value: '+150%' },
      { label: 'Project Value', value: '+80%' }, { label: 'Social Following', value: '+25K' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600',
    ],
  },
  {
    id: '11', slug: 'ember-restaurant-brand', title: 'Ember — Restaurant Brand & Menu Design', client: 'Ember Grill House',
    category: 'Branding', filter: 'Branding', year: '2024',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600',
    gradient: 'from-orange-700 via-red-600 to-amber-500',
    shortDesc: 'A bold restaurant brand identity and menu design system.',
    challenge: 'Ember needed to stand out in a competitive dining scene with a brand that communicated fire, passion, and quality.',
    creativeDirection: 'We created a "live fire" concept — hand-illustrated flame elements, bold serif typography, and a warm color palette that made every touchpoint feel alive.',
    process: [
      { phase: 'Research', detail: 'Visited the restaurant, studied the menu, and analyzed competitor branding in the area.' },
      { phase: 'Concept', detail: 'Designed flame-inspired logo, custom illustrations, and a warm, inviting color system.' },
      { phase: 'Execution', detail: 'Created logo, menu design, signage, social templates, and staff uniforms.' },
      { phase: 'Final Result', detail: 'Ember became the #1 rated restaurant in its area within 6 months of opening.' },
    ],
    results: [
      { label: 'Rating', value: '#1' }, { label: 'Reservations', value: '+200%' },
      { label: 'Social Tags', value: '15K' }, { label: 'Revenue', value: '+45%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600',
    ],
  },
  {
    id: '12', slug: 'arc-edtech-ui', title: 'Arc — EdTech Platform UI', client: 'Arc Learning',
    category: 'UI Design', filter: 'UI Design', year: '2025',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600',
    gradient: 'from-teal-600 via-green-500 to-emerald-400',
    shortDesc: 'An engaging, accessible learning platform interface design.',
    challenge: 'Arc Learning needed a UI that made online education feel engaging, not clinical, while supporting complex learning paths.',
    creativeDirection: 'We designed a "learning journey" concept — progress visualizations, warm colors, and gamified elements that made learning feel like an adventure.',
    process: [
      { phase: 'Research', detail: 'Studied learning psychology, analyzed 20+ edtech platforms, and tested with students.' },
      { phase: 'Concept', detail: 'Created journey-based navigation, progress dashboards, and a warm visual system.' },
      { phase: 'Execution', detail: 'Designed 45+ screens, a complete design system, and interactive prototypes.' },
      { phase: 'Final Result', detail: 'Arc achieved a 68% course completion rate, 3x the industry average.' },
    ],
    results: [
      { label: 'Completion Rate', value: '68%' }, { label: 'User Satisfaction', value: '4.7★' },
      { label: 'Daily Study Time', value: '+40%' }, { label: 'Active Learners', value: '80K' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd554?q=80&w=1600',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600',
    ],
  },
]

export const services = [
  {
    id: '1', icon: 'Palette', title: 'Social Media Design',
    description: 'Strategic visual content designed to increase engagement and strengthen online presence.',
    problem: 'Brands struggle to maintain a consistent, professional social media presence that actually drives results.',
    solution: 'A complete social media design system — templates, content pillars, and visual guidelines that make every post count.',
    process: ['Audit existing content', 'Design template system', 'Create content pillars', 'Deliver brand guidelines'],
    outcome: 'A scalable social media design system that increases engagement and builds brand recognition.',
  },
  {
    id: '2', icon: 'Sparkles', title: 'Brand Identity',
    description: 'Complete visual systems that create memorable brands.',
    problem: 'A weak or inconsistent brand identity makes businesses look unprofessional and forgettable.',
    solution: 'A full visual identity — logo, color palette, typography, and guidelines that tell your brand story.',
    process: ['Brand discovery', 'Concept development', 'Identity design', 'Guideline creation'],
    outcome: 'A cohesive brand identity that builds trust, recognition, and customer loyalty.',
  },
  {
    id: '3', icon: 'Lightbulb', title: 'Content Strategy',
    description: 'Creative direction and content planning designed for growth.',
    problem: 'Without a strategy, content creation is scattered and ineffective.',
    solution: 'A strategic content roadmap — themes, formats, and schedules designed to grow your audience.',
    process: ['Audience analysis', 'Content audit', 'Strategy development', 'Calendar creation'],
    outcome: 'A content engine that consistently produces results and grows your brand presence.',
  },
  {
    id: '4', icon: 'Rocket', title: 'Digital Campaign Design',
    description: 'High-impact campaigns built to capture attention.',
    problem: 'Generic campaigns get lost in the noise of social media feeds.',
    solution: 'Concept-driven campaign design — from idea to execution, campaigns that stop the scroll and drive action.',
    process: ['Campaign concept', 'Visual direction', 'Asset creation', 'Launch support'],
    outcome: 'Campaigns that generate buzz, drive engagement, and deliver measurable business results.',
  },
]

export const testimonials = [
  { id: '1', name: 'Sarah Chen', role: 'CMO', company: 'Luxe Beauty Co.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200', quote: 'Working with this team transformed our brand. Our social media engagement went up 300% and we finally look like the premium brand we always knew we were.', rating: 5 },
  { id: '2', name: 'Marcus Johnson', role: 'Founder & CEO', company: 'TechFlow Systems', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', quote: 'The product launch campaign exceeded every expectation. 12K signups in week one. The design quality is simply on another level.', rating: 5 },
  { id: '3', name: 'Elena Rossi', role: 'Creative Director', company: 'Aurora Couture', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200', quote: 'They understood our vision immediately. The fashion week campaign was breathtaking — it sold out in 48 hours and generated millions of impressions.', rating: 5 },
  { id: '4', name: 'David Okonkwo', role: 'Owner', company: 'Nomad Coffee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200', quote: 'Our brand went from a local coffee shop to a destination. The identity work was beautiful and it resonated with customers immediately.', rating: 5 },
  { id: '5', name: 'Lisa Park', role: 'Head of Marketing', company: 'Wave Finance', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200', quote: 'The app UI design was flawless. 4.8 stars on the app store and 100K downloads in the first month. The attention to detail was incredible.', rating: 5 },
  { id: '6', name: 'James Mitchell', role: 'Director', company: 'Vertex Tech', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200', quote: 'Our lead quality jumped 35% after the marketing graphics refresh. The new design system made our sales process faster and more effective.', rating: 5 },
]

export const blogPosts = [
  { id: '1', slug: 'how-good-design-builds-trust', title: 'How Good Design Builds Trust', excerpt: 'Why visual consistency is the foundation of brand trust, and how to use design to create credibility.', date: 'Jul 15, 2025', readTime: '6 min', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600', category: 'Design' },
  { id: '2', slug: 'why-brands-fail-on-social-media', title: 'Why Brands Fail On Social Media', excerpt: 'The common mistakes that kill social media presence and how to avoid them with intentional design.', date: 'Jul 8, 2025', readTime: '8 min', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600', category: 'Social Media' },
  { id: '3', slug: 'creating-content-that-converts', title: 'Creating Content That Converts', excerpt: 'A framework for designing social media content that doesn\'t just look good — it drives business results.', date: 'Jul 1, 2025', readTime: '7 min', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600', category: 'Content' },
  { id: '4', slug: 'design-trends-for-modern-businesses', title: 'Design Trends For Modern Businesses', excerpt: 'The visual trends shaping 2025 and how forward-thinking brands are using them to stand out.', date: 'Jun 24, 2025', readTime: '5 min', image: 'https://images.unsplash.com/photo-1501400305452-3ad975410317?q=80&w=1600', category: 'Trends' },
]
