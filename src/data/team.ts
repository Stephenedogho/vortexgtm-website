export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: 'Ada Okonkwo',
    role: 'Founder & Managing Partner',
    bio: 'Former VP Revenue Operations at two PE-backed B2B SaaS exits. Ada founded VORTEX to give growth-stage teams the GTM engineering depth that usually only sits inside late-stage companies.',
    initials: 'AO',
  },
  {
    name: 'Marcus Reinhardt',
    role: 'Partner, Revenue Infrastructure',
    bio: 'Marcus has architected revenue stacks for Series A through pre-IPO companies. Previously led RevOps engineering at a public data infrastructure company.',
    initials: 'MR',
  },
  {
    name: 'Priya Venkatesan',
    role: 'Partner, Demand Engineering',
    bio: 'Priya built and scaled demand programs that powered three companies past $100M ARR. She specializes in compounding inbound systems and AI-augmented outbound.',
    initials: 'PV',
  },
  {
    name: 'Theo Lambert',
    role: 'Partner, Product-Led Growth',
    bio: 'Theo led growth at two PLG-first companies, including one that went from launch to $50M ARR in 22 months. He focuses on activation, monetization, and PQL-to-pipeline plumbing.',
    initials: 'TL',
  },
  {
    name: 'Sasha Brennan',
    role: 'Head of Client Strategy',
    bio: 'Sasha translates business goals into GTM engineering roadmaps. She previously ran strategy at a Tier-1 GTM advisory and operated as Chief of Staff to a public-company CRO.',
    initials: 'SB',
  },
];

export interface CoreValue {
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    title: 'Engineer the system, not the campaign',
    description:
      'We build the durable infrastructure your team will use for years — not the one-off plays that only work while we are in the room.',
  },
  {
    title: 'Operator-grade execution',
    description:
      'Every partner has carried a number. We ship work that survives a board meeting and a quarterly close, because we have lived through both.',
  },
  {
    title: 'Defensibly measurable',
    description:
      'If the impact cannot be tied to revenue or efficiency, it does not ship. We make our work falsifiable and the numbers transparent.',
  },
  {
    title: 'Honest over diplomatic',
    description:
      'You are paying for our judgment. We tell you what we actually think — about your team, your motion, and the work you have asked us to do.',
  },
];

export interface Client {
  name: string;
  initials: string;
}

export const clients: Client[] = [
  { name: 'Helix Data', initials: 'HD' },
  { name: 'NorthCurrent', initials: 'NC' },
  { name: 'Levelset Cloud', initials: 'LC' },
  { name: 'Paradigm Health', initials: 'PH' },
  { name: 'Fieldline', initials: 'FL' },
  { name: 'Atlas Labs', initials: 'AL' },
  { name: 'Vector Forge', initials: 'VF' },
  { name: 'Quantum Reach', initials: 'QR' },
];
