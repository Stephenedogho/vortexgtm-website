export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'revenue-infrastructure',
    shortTitle: 'Revenue Infrastructure',
    title: 'Revenue Infrastructure Engineering',
    tagline: 'Connect every system. Trust every number.',
    description:
      'We architect the unified data and tooling layer that powers your entire commercial org — CRM, marketing automation, product analytics, billing, and warehouse — so revenue forecasts move from guesswork to engineering.',
    outcomes: [
      'Single source of truth across CRM, product, and finance systems',
      'Forecast accuracy improvements of 30–50% within two quarters',
      'Sub-day attribution from first-touch to closed revenue',
    ],
    deliverables: [
      'Reverse-ETL & warehouse architecture (Snowflake, BigQuery, Databricks)',
      'CRM rebuild and lifecycle modeling (Salesforce, HubSpot)',
      'Attribution and revenue analytics dashboards',
    ],
    icon: 'circuit',
  },
  {
    slug: 'demand-engineering',
    shortTitle: 'Demand Engineering',
    title: 'Demand Engineering & Pipeline Generation',
    tagline: 'Build a demand engine, not a campaign calendar.',
    description:
      'We design programmatic demand systems that compound — multi-channel orchestration, intent-driven targeting, and automated nurture infrastructure that scale qualified pipeline without scaling headcount.',
    outcomes: [
      '2–4× pipeline velocity from existing accounts',
      'CAC payback shortened by 40% on average',
      'Predictable inbound that survives team transitions',
    ],
    deliverables: [
      'ICP modeling and account-tier scoring engines',
      'Multi-channel orchestration (paid, lifecycle, ABM, partner)',
      'AI-assisted personalization and outbound infrastructure',
    ],
    icon: 'pulse',
  },
  {
    slug: 'gtm-operations',
    shortTitle: 'GTM Operations',
    title: 'GTM Operations & Enablement',
    tagline: 'Operationalize the playbook your reps actually run.',
    description:
      'We embed alongside your RevOps and enablement teams to design the territory, comp, forecasting, and deal-desk machinery that makes a sales org repeatable — and the enablement that makes new reps productive in weeks, not quarters.',
    outcomes: [
      'New-hire ramp times cut by 35–60%',
      'Forecast variance under 10% by quarter three',
      'Deal-cycle compression through structured deal reviews',
    ],
    deliverables: [
      'Territory design, quota modeling, and compensation plans',
      'Forecast cadence and deal inspection frameworks',
      'Sales enablement curriculum and certification tracks',
    ],
    icon: 'gear',
  },
  {
    slug: 'product-led-growth',
    shortTitle: 'Product-Led Growth',
    title: 'Product-Led Growth Systems',
    tagline: 'Turn product usage into your best sales rep.',
    description:
      'We instrument your product, define the activation and qualification signals that matter, and build the PQL-to-pipeline plumbing that lets self-serve and sales-led motions reinforce each other instead of competing.',
    outcomes: [
      'PQL-to-opportunity conversion lifted by 2–3×',
      'Self-serve revenue mix grown from <5% to 25%+',
      'Reduced sales involvement on low-ACV deals',
    ],
    deliverables: [
      'Product analytics & event taxonomy (Amplitude, Mixpanel, Heap)',
      'PQL scoring models and routing automation',
      'In-product growth loops, paywalls, and upgrade paths',
    ],
    icon: 'spark',
  },
];
