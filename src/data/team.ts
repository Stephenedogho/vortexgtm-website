export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: 'Stephen Edogho',
    role: 'Senior GTM Engineer',
    bio: 'Stephen architects outbound infrastructure and revenue systems for B2B clients, specializing in cold email deliverability, lead enrichment, and automation across the full GTM stack.',
    initials: 'SE',
  },
  {
    name: 'Solomon Anyawua',
    role: 'Junior GTM',
    bio: 'Solomon supports campaign execution and GTM operations, helping clients turn strategy into running systems.',
    initials: 'SA',
  },
  {
    name: 'Faith Ehimen',
    role: 'SDR',
    bio: 'Faith drives outbound prospecting and pipeline generation, connecting VORTEX clients with the right conversations.',
    initials: 'FE',
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
