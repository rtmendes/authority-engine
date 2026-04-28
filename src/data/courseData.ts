export interface Lesson {
  id: string;
  title: string;
  duration: string;
  topics: string[];
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  duration: string;
  color: string;
  lessons: Lesson[];
  keyTools: string[];
  deliverable: string;
}

export const courseModules: Module[] = [
  {
    id: 1,
    title: "The Authority Money Model",
    subtitle: "SEO × AEO Architecture",
    icon: "🏗️",
    duration: "15 min",
    color: "#2563eb",
    keyTools: ["DEEPR Framework", "Revenue Stack Planner"],
    deliverable: "Complete niche validation + 3-pillar strategy map",
    lessons: [
      { id: "1.1", title: "The Three Pillars: SEO + AEO + GEO", duration: "3 min", topics: ["Traditional SEO traffic", "AI Overview citations", "LLM brand mentions", "Revenue allocation across pillars"] },
      { id: "1.2", title: "DEEPR Niche Validation", duration: "4 min", topics: ["Demand scoring", "Evergreen assessment", "Expertise depth", "Profit potential", "Rangeability analysis"] },
      { id: "1.3", title: "Revenue Stack Architecture", duration: "4 min", topics: ["Organic traffic monetization (50%)", "AI citation revenue (30%)", "Microsite empire (20%)", "90-day revenue targets"] },
      { id: "1.4", title: "Competitive Intelligence Setup", duration: "4 min", topics: ["DataforSEO competitor tracking", "SERP feature mapping", "AI Overview source analysis", "Opportunity scoring"] },
    ]
  },
  {
    id: 2,
    title: "Semantic Branching Architecture",
    subtitle: "Foundation of Topical Authority",
    icon: "🌳",
    duration: "15 min",
    color: "#059669",
    keyTools: ["Semantic Branch Mapper", "Interlinking Designer"],
    deliverable: "50-100 page content map with full interlinking plan",
    lessons: [
      { id: "2.1", title: "Pillar → Branch → Leaf Model", duration: "3 min", topics: ["Core topic identification", "5+ primary branches", "25+ leaf pages per branch", "Intent layering (Info/Nav/Com/Trans)"] },
      { id: "2.2", title: "Semantic Mesh Interlinking", duration: "4 min", topics: ["Hub-and-spoke vs mesh", "Contextual anchor text", "Link equity distribution", "Orphan page elimination"] },
      { id: "2.3", title: "Content Gap Analysis", duration: "4 min", topics: ["AI-powered gap finder prompts", "Competitor content mapping", "PAA mining for branch ideas", "Intent coverage audit"] },
      { id: "2.4", title: "URL Architecture & Taxonomy", duration: "4 min", topics: ["/core/branch/leaf structure", "Breadcrumb hierarchy", "Category pages vs tag pages", "Scalable naming conventions"] },
    ]
  },
  {
    id: 3,
    title: "Technical SEO Mastery",
    subtitle: "The Invisible Infrastructure",
    icon: "⚙️",
    duration: "15 min",
    color: "#7c3aed",
    keyTools: ["Schema Generator", "CWV Checker", "Indexation Monitor"],
    deliverable: "Complete technical audit + schema implementation",
    lessons: [
      { id: "3.1", title: "Schema Markup Stack", duration: "4 min", topics: ["Article + BlogPosting schema", "FAQPage schema", "Organization + Person schema", "BreadcrumbList schema", "SpeakableSpecification for voice"] },
      { id: "3.2", title: "Core Web Vitals Optimization", duration: "4 min", topics: ["LCP < 2.5s strategies", "FID < 100ms fixes", "CLS < 0.1 techniques", "Cloudflare CDN + WebP"] },
      { id: "3.3", title: "Indexation & Crawl Budget", duration: "4 min", topics: ["XML sitemap strategy", "Robots.txt configuration", "Indexing API for instant crawls", "Canonical tag management"] },
      { id: "3.4", title: "Automated Health Monitoring", duration: "3 min", topics: ["n8n SEO Health workflow", "GSC API integration", "Broken link detection", "Schema validation alerts"] },
    ]
  },
  {
    id: 4,
    title: "AI Overview Optimization & AEO",
    subtitle: "Answer Engine Strategy",
    icon: "🤖",
    duration: "15 min",
    color: "#dc2626",
    keyTools: ["Semantic Snippet Writer", "PAA Scraper", "AIO Tracker"],
    deliverable: "50+ semantic snippets + PAA content roadmap",
    lessons: [
      { id: "4.1", title: "How AI Overviews Select Sources", duration: "3 min", topics: ["40-80 word extraction zone", "Authority signals for AIO", "Content structure requirements", "Freshness and E-E-A-T signals"] },
      { id: "4.2", title: "Semantic Snippet Writing", duration: "4 min", topics: ["The 40-80 word answer format", "Definition-first paragraphs", "Numbered list optimization", "Table/comparison snippets"] },
      { id: "4.3", title: "PAA Mining at Scale", duration: "4 min", topics: ["Google Apps Script PAA scraper", "Recursive PAA expansion", "Branch assignment workflow", "Content calendar from PAAs"] },
      { id: "4.4", title: "Featured Snippet Capture", duration: "4 min", topics: ["Paragraph vs list vs table snippets", "Is-statement optimization", "Header-answer pairing", "n8n snippet generation workflow"] },
    ]
  },
  {
    id: 5,
    title: "LLM Visibility & GEO",
    subtitle: "Generative Engine Optimization",
    icon: "🧠",
    duration: "15 min",
    color: "#ea580c",
    keyTools: ["Entity Auditor", "LLM Citation Tracker", "Reddit Planner"],
    deliverable: "Entity establishment + LLM seeding campaign",
    lessons: [
      { id: "5.1", title: "Entity Establishment Protocol", duration: "4 min", topics: ["Organization schema with @id", "Google Knowledge Panel", "sameAs linking (50+ platforms)", "Crunchbase/Wikidata entries"] },
      { id: "5.2", title: "LLM Training Data Strategy", duration: "4 min", topics: ["How ChatGPT/Claude/Gemini source info", "Reddit as LLM training data goldmine", "Wikipedia & authoritative sources", "Structured data for LLM extraction"] },
      { id: "5.3", title: "Platform Seeding Campaigns", duration: "4 min", topics: ["Reddit authority building", "Quora expert answers", "Medium/LinkedIn publishing", "YouTube description optimization"] },
      { id: "5.4", title: "LLM Visibility Tracking", duration: "3 min", topics: ["Monthly brand query audits", "ChatGPT Conversation Analyzer (n8n)", "Perplexity citation monitoring", "Competitor mention tracking"] },
    ]
  },
  {
    id: 6,
    title: "Off-Page Authority & Link Building",
    subtitle: "Strategic Backlink Acquisition",
    icon: "🔗",
    duration: "15 min",
    color: "#0891b2",
    keyTools: ["Outreach Templates", "Backlink Tracker", "Citation Builder"],
    deliverable: "30+ backlink targets + outreach campaign ready",
    lessons: [
      { id: "6.1", title: "Link Building Strategy Mix", duration: "3 min", topics: ["Guest posting at scale", "Broken link building", "Resource page outreach", "Digital PR campaigns", "Anchor text distribution"] },
      { id: "6.2", title: "Outreach at Scale", duration: "4 min", topics: ["Instantly + Hunter.io setup", "Email warm-up protocol", "5-email sequence templates", "Response handling automation"] },
      { id: "6.3", title: "Parasite SEO & Platform Authority", duration: "4 min", topics: ["Reddit optimization", "Medium authority building", "LinkedIn article strategy", "YouTube description links"] },
      { id: "6.4", title: "Local Citation Building", duration: "4 min", topics: ["50+ citation directories", "NAP consistency", "GBP optimization", "Review generation strategy"] },
    ]
  },
  {
    id: 7,
    title: "Microsite Empire",
    subtitle: "Scaling Authority Across Niches",
    icon: "🏢",
    duration: "15 min",
    color: "#be185d",
    keyTools: ["Microsite Builder", "EMD Finder", "GBP Manager"],
    deliverable: "3 microsite plans with domain + GBP strategy",
    lessons: [
      { id: "7.1", title: "Niche & Location Selection", duration: "3 min", topics: ["High-margin local niches", "Location demand scoring", "Competition analysis", "Revenue model selection (R&R/LeadGen/PPC)"] },
      { id: "7.2", title: "Exact Match Domain Strategy", duration: "4 min", topics: ["EMD value in 2026", "Expired domain hunting", "Domain acquisition tactics", "PBN vs authority approach"] },
      { id: "7.3", title: "One-Click Site Building", duration: "4 min", topics: ["Kirby CMS templates", "AI content generation", "Logo/image creation", "AI voice agents for calls"] },
      { id: "7.4", title: "Scaling to 50+ Sites", duration: "4 min", topics: ["Batch processing workflows", "VPS hosting optimization", "Centralized monitoring", "Revenue optimization per site"] },
    ]
  },
  {
    id: 8,
    title: "AI-Powered SEO Workflows",
    subtitle: "n8n Automation Arsenal",
    icon: "⚡",
    duration: "15 min",
    color: "#4f46e5",
    keyTools: ["n8n", "DataforSEO API", "OpenAI API", "Google Sheets"],
    deliverable: "5+ deployed n8n workflows running automatically",
    lessons: [
      { id: "8.1", title: "Keyword Research Workflow", duration: "3 min", topics: ["DataforSEO API integration", "Volume + KD + CPC extraction", "Opportunity score calculation", "Auto-populate Google Sheet"] },
      { id: "8.2", title: "Content Briefing & Planning", duration: "4 min", topics: ["Automated content brief generation", "SERP analysis integration", "Competitor content comparison", "Monthly content calendar"] },
      { id: "8.3", title: "Health Monitoring & Alerts", duration: "4 min", topics: ["GSC API daily checks", "Ranking drop alerts", "Indexation issue detection", "Competitor change tracking"] },
      { id: "8.4", title: "Entity & Internal Link Optimization", duration: "4 min", topics: ["Entity SEO optimizer workflow", "Internal link suggestions", "Semantic drift analyzer", "YouTube-to-Blog pipeline"] },
    ]
  },
  {
    id: 9,
    title: "Content That Ranks AND Gets Cited",
    subtitle: "Writing for Humans, Google, and LLMs",
    icon: "✍️",
    duration: "15 min",
    color: "#b45309",
    keyTools: ["Triple-Optimized Scorecard", "Framework Generator"],
    deliverable: "Content template + scoring system for every page",
    lessons: [
      { id: "9.1", title: "Triple-Optimized Content Framework", duration: "4 min", topics: ["Google optimization layer", "AI Overview optimization layer", "LLM citation optimization layer", "The 50-point content scorecard"] },
      { id: "9.2", title: "E-E-A-T Signal Engineering", duration: "3 min", topics: ["Experience demonstrations", "Expertise proof points", "Authority signals", "Trust indicators", "Author bio markup"] },
      { id: "9.3", title: "Named Framework Strategy", duration: "4 min", topics: ["Create proprietary methodologies", "Acronym frameworks (DEEPR, etc.)", "Data-backed original research", "Unique statistics and studies"] },
      { id: "9.4", title: "AI Content at Scale", duration: "4 min", topics: ["Content pipeline automation", "Human + AI hybrid workflow", "Quality gates and review process", "Content refresh scheduling"] },
    ]
  },
  {
    id: 10,
    title: "Measurement, Scaling & Flywheel",
    subtitle: "The Authority Compound Effect",
    icon: "📈",
    duration: "15 min",
    color: "#16a34a",
    keyTools: ["KPI Dashboard", "Reporting Automation", "Scale Calculator"],
    deliverable: "Live KPI dashboard + 90-day implementation roadmap",
    lessons: [
      { id: "10.1", title: "The New SEO Metrics", duration: "3 min", topics: ["AI citation count", "Pixels from top (AI Overview position)", "Share of Voice across Google + LLMs", "Cross-platform visibility score"] },
      { id: "10.2", title: "Automated Reporting", duration: "4 min", topics: ["GSC + DataforSEO data warehouse", "Weekly automated reports", "Trend detection alerts", "Competitor benchmarking"] },
      { id: "10.3", title: "The Authority Flywheel", duration: "4 min", topics: ["Content → Rankings → Authority → Citations → Content", "Compounding returns timeline", "Revenue scaling triggers", "When to add new branches/microsites"] },
      { id: "10.4", title: "90-Day Implementation Roadmap", duration: "4 min", topics: ["Week-by-week action plan", "Milestone checkpoints", "Resource allocation guide", "Scale decision framework"] },
    ]
  }
];

export const n8nWorkflows = [
  { name: "Keyword Research", apis: "DataforSEO + OpenAI", frequency: "On demand", description: "Bulk keyword analysis with volume, KD, CPC, and opportunity scoring" },
  { name: "Content Briefing", apis: "DataforSEO + OpenAI", frequency: "On demand", description: "Auto-generate SEO content briefs from keyword clusters" },
  { name: "Content Plan", apis: "OpenAI", frequency: "Monthly", description: "AI-generated monthly content calendar aligned to semantic map" },
  { name: "SEO Health Monitor", apis: "GSC API", frequency: "Daily", description: "Automated site health checks with ranking drop alerts" },
  { name: "Competitor Tracker", apis: "DataforSEO", frequency: "Weekly", description: "Track competitor ranking changes and new content" },
  { name: "Internal Link Optimizer", apis: "OpenAI", frequency: "Monthly", description: "Suggest internal linking opportunities across your content" },
  { name: "Entity SEO Optimizer", apis: "DataforSEO + OpenAI", frequency: "On demand", description: "Optimize pages for entity-based search understanding" },
  { name: "YouTube-to-Blog", apis: "YouTube API + OpenAI", frequency: "On demand", description: "Convert YouTube videos into SEO-optimized blog posts" },
  { name: "Semantic Snippet Generator", apis: "DataforSEO + OpenAI", frequency: "On demand", description: "Generate 40-80 word extractable answers for AI Overviews" },
  { name: "PAA Scraper", apis: "Google Sheets Apps Script", frequency: "Weekly", description: "Recursively mine People Also Ask questions at scale" },
  { name: "ChatGPT Conversation Analyzer", apis: "OpenAI", frequency: "Monthly", description: "Analyze how LLMs discuss your brand and competitors" },
  { name: "Semantic Drift Analyzer", apis: "DataforSEO + OpenAI", frequency: "Monthly", description: "Detect when content drifts from target semantic focus" },
  { name: "Landing Page Audit", apis: "DataforSEO + OpenAI", frequency: "Monthly", description: "Automated landing page quality and conversion analysis" },
];
