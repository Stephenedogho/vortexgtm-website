export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'helix-data',
    client: 'Helix Data',
    industry: 'Data Infrastructure',
    headline: 'Rebuilt a fragmented revenue stack into a single attribution model — and lifted forecast accuracy from 62% to 94%.',
    summary:
      'A Series C data platform was running marketing, sales, and finance off three disconnected systems. We unified them into a warehouse-native revenue model in 14 weeks, giving the CRO weekly forecasts the board could actually trust.',
    metrics: [
      { label: 'Forecast accuracy', value: '94%' },
      { label: 'Time to close-the-quarter', value: '−6 days' },
      { label: 'Pipeline visibility', value: '100% of ARR' },
    ],
    services: ['Revenue Infrastructure', 'GTM Operations'],
  },
  {
    slug: 'northcurrent-ai',
    client: 'NorthCurrent AI',
    industry: 'Vertical AI',
    headline: 'Designed a PLG-to-enterprise motion that grew self-serve ARR 6× in three quarters.',
    summary:
      'NorthCurrent had strong product traction but no qualification signal pointing sales at the right accounts. We built the PQL model, instrumented the product, and shipped the routing layer that turned trial users into a predictable enterprise pipeline.',
    metrics: [
      { label: 'Self-serve ARR growth', value: '6×' },
      { label: 'PQL → opportunity conversion', value: '32%' },
      { label: 'Sales-touched ACV uplift', value: '+47%' },
    ],
    services: ['Product-Led Growth', 'Demand Engineering'],
  },
  {
    slug: 'levelset-cloud',
    client: 'Levelset Cloud',
    industry: 'Developer Tools',
    headline: 'Rebuilt outbound from cold lists to intent-driven plays, cutting CAC payback from 22 to 11 months.',
    summary:
      'A 90-person dev-tools company was pouring spend into broad outbound with diminishing returns. We rebuilt the targeting engine around product-usage and intent signals, and re-trained the SDR org around a new play library.',
    metrics: [
      { label: 'CAC payback', value: '11 months' },
      { label: 'Reply rate', value: '14.8%' },
      { label: 'SQO conversion', value: '+62%' },
    ],
    services: ['Demand Engineering', 'GTM Operations'],
  },
  {
    slug: 'paradigm-health',
    client: 'Paradigm Health',
    industry: 'Healthcare SaaS',
    headline: 'Stood up the entire RevOps function for a Series B health-tech in nine weeks.',
    summary:
      'Paradigm Health needed to professionalize go-to-market ahead of a Series C raise. We embedded a fractional RevOps team, rebuilt Salesforce, designed compensation, and shipped the forecasting cadence the board diligence required.',
    metrics: [
      { label: 'Time to operational RevOps', value: '9 weeks' },
      { label: 'Pipeline coverage', value: '4.1×' },
      { label: 'New-rep ramp time', value: '−51%' },
    ],
    services: ['GTM Operations', 'Revenue Infrastructure'],
  },
  {
    slug: 'fieldline',
    client: 'Fieldline',
    industry: 'Industrial IoT',
    headline: 'Designed a partner-led GTM motion that now drives 38% of new ARR.',
    summary:
      'Fieldline had reached a ceiling on direct sales. We designed and operationalized a partner channel — partner tiers, deal registration, MDF, and a dedicated portal — that opened a second growth engine in under a year.',
    metrics: [
      { label: 'Partner-sourced ARR', value: '38%' },
      { label: 'Active partners', value: '120+' },
      { label: 'Partner-influenced deals', value: '+210%' },
    ],
    services: ['Demand Engineering', 'GTM Operations'],
  },
];
