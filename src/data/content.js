// All copy and structured content for the NOVA landing page lives here,
// separated from presentation so components stay reusable and content
// stays easy to review/edit without touching markup.

export const nav = {
  brand: 'NOVA',
  links: [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Start free trial',
}

export const hero = {
  eyebrow: 'AI productivity platform',
  headline: 'Build better. Work smarter.',
  sub: 'NOVA plans your projects, clears the busywork and keeps every team member looking at the same page — literally. One workspace, powered by AI that actually understands your work.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Watch 2-min demo',
  note: 'No credit card required · Free for teams up to 5',
  stats: [
    { value: '2.4M+', label: 'tasks automated weekly' },
    { value: '38%', label: 'average time saved' },
    { value: '11,000+', label: 'teams onboard' },
  ],
}

export const trustedBy = {
  label: 'Trusted by teams at',
  logos: ['Fieldstone', 'Kestrel Labs', 'Marrow', 'Loomis & Co', 'Northwind', 'Amberlight', 'Vantage Row', 'Petrel'],
}

export const features = [
  {
    title: 'Smart task routing',
    description: 'NOVA reads task context and assigns work to the right person based on skills, availability and current load — no manual triage.',
    icon: 'route',
  },
  {
    title: 'Auto-generated project plans',
    description: 'Describe a goal in plain language and NOVA drafts a full project plan with milestones, dependencies and realistic timelines.',
    icon: 'sparkles',
  },
  {
    title: 'Meeting notes that act',
    description: 'NOVA joins calls, summarizes decisions and turns action items into tracked tasks automatically — before the call even ends.',
    icon: 'mic',
  },
  {
    title: 'Workload balancing',
    description: 'See who is overloaded and who has room, then rebalance work in one click. NOVA flags burnout risk before it happens.',
    icon: 'scale',
  },
  {
    title: 'Cross-tool automations',
    description: 'Connect the tools your team already uses and let NOVA move information between them without a single Zapier-style workaround.',
    icon: 'link',
  },
  {
    title: 'Reporting that writes itself',
    description: 'Weekly status updates, sprint retros and stakeholder summaries are drafted from real activity — you edit, not write from scratch.',
    icon: 'chart',
  },
]

export const product = {
  eyebrow: 'The product',
  title: 'One workspace. Every project, in view.',
  description:
    'NOVA replaces the sprawl of docs, spreadsheets and chat threads with a single, structured workspace. Every task, file and decision lives in context — and NOVA keeps it organized as your team moves.',
  bullets: [
    'Kanban, timeline and calendar views of the same live data',
    'Version history on every task, document and automation',
    'Granular permissions for clients, contractors and internal teams',
  ],
}

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'From idea to shipped, in three steps',
  steps: [
    {
      title: 'Describe the goal',
      description: 'Type a goal the way you would explain it to a teammate. NOVA asks clarifying questions if it needs more context.',
    },
    {
      title: 'Review the plan',
      description: 'NOVA proposes a project plan with owners, milestones and deadlines. Adjust anything — NOVA learns your preferences over time.',
    },
    {
      title: 'Work, tracked automatically',
      description: 'As work happens across your tools, NOVA updates status, flags risks and drafts the reports so nobody has to chase updates.',
    },
  ],
}

export const stats = [
  { value: 38, suffix: '%', label: 'less time in status meetings' },
  { value: 11400, suffix: '+', label: 'teams running on NOVA', format: 'compact' },
  { value: 2.4, suffix: 'M', label: 'tasks automated every week' },
  { value: 96, suffix: '%', label: 'of users still active after 90 days' },
]

export const solutions = {
  eyebrow: 'Solutions',
  title: 'Built for how different teams actually work',
  items: [
    {
      title: 'Product teams',
      description: 'Turn roadmaps into sprints automatically, and keep engineering, design and PM in one source of truth.',
    },
    {
      title: 'Marketing teams',
      description: 'Plan campaigns, route approvals and track content deadlines without a separate tool for every channel.',
    },
    {
      title: 'Agencies & studios',
      description: 'Give every client their own view, track billable hours automatically and never miss a deliverable date.',
    },
    {
      title: 'Operations teams',
      description: 'Standardize recurring processes into templates NOVA runs on schedule, with exceptions flagged for review.',
    },
  ],
}

export const testimonials = [
  {
    quote:
      'We cut our weekly status meeting from an hour to fifteen minutes because NOVA already has the update drafted. It sounds small. It changed how our team works.',
    name: 'Priya Raman',
    role: 'Head of Product, Kestrel Labs',
  },
  {
    quote:
      'The auto-generated project plans are shockingly good. I used to spend a full day scoping a new project. Now I review a plan NOVA drafted and adjust three things.',
    name: 'Daniel Osei',
    role: 'Engineering Manager, Fieldstone',
  },
  {
    quote:
      'Our agency runs twelve client accounts at once. NOVA is the only reason we can do that without dropping a deadline or a client noticing the chaos behind the curtain.',
    name: 'Mireille Duarte',
    role: 'Operations Director, Loomis & Co',
  },
  {
    quote:
      'Workload balancing alone paid for the subscription. We caught two people heading toward burnout in the first month and redistributed work before it became a problem.',
    name: 'Tom Whitfield',
    role: 'COO, Northwind Studio',
  },
]

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Plans that grow with your team',
  toggle: { monthly: 'Monthly', annual: 'Annual', discount: 'Save 20%' },
  plans: [
    {
      name: 'Starter',
      description: 'For small teams getting organized for the first time.',
      monthly: 0,
      annual: 0,
      cta: 'Start free',
      features: ['Up to 5 members', 'Unlimited tasks', 'Kanban & calendar views', 'Basic automations', '3 AI plans per month'],
      highlighted: false,
    },
    {
      name: 'Team',
      description: 'For growing teams that need automation and reporting.',
      monthly: 14,
      annual: 11,
      cta: 'Start free trial',
      features: [
        'Up to 50 members',
        'Everything in Starter',
        'Unlimited AI project plans',
        'Meeting notes & auto action items',
        'Workload balancing',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Business',
      description: 'For organizations running many teams and clients.',
      monthly: 29,
      annual: 24,
      cta: 'Talk to sales',
      features: [
        'Unlimited members',
        'Everything in Team',
        'Client & contractor permissions',
        'Advanced reporting suite',
        'SSO & audit logs',
        'Dedicated onboarding',
      ],
      highlighted: false,
    },
  ],
}

export const faq = [
  {
    question: 'Does NOVA replace the tools my team already uses?',
    answer:
      'Not necessarily. NOVA works as your team\u2019s central workspace and connects to tools like Slack, GitHub, Google Drive and Figma, so information flows between them. Many teams do consolidate over time, but it is not required to get value on day one.',
  },
  {
    question: 'How accurate are the AI-generated project plans?',
    answer:
      'NOVA drafts plans using your team\u2019s historical velocity, similar past projects and the context you provide. Most teams report only needing to adjust a handful of details rather than rebuild the plan from scratch, and accuracy improves the more your team uses NOVA.',
  },
  {
    question: 'Is my data used to train NOVA\u2019s models?',
    answer:
      'No. Workspace data is never used to train shared models. Every workspace is isolated, and enterprise plans include additional controls like audit logs and data residency options.',
  },
  {
    question: 'Can I try NOVA before paying?',
    answer:
      'Yes. The Starter plan is free for teams up to five people with no time limit, and Team and Business plans include a 14-day free trial with full feature access — no credit card required to start.',
  },
  {
    question: 'What happens to our data if we cancel?',
    answer:
      'You can export everything — tasks, files, history and reports — at any time, including after cancellation. We retain your data for 30 days after cancellation in case you change your mind, then it is permanently deleted.',
  },
  {
    question: 'Does NOVA work for non-technical teams?',
    answer:
      'Yes. While many product and engineering teams use NOVA, the Solutions section above covers marketing, agency and operations teams who use NOVA without ever touching a line of code.',
  },
]

export const finalCta = {
  title: 'Your team\u2019s next project starts here.',
  sub: 'Set up your workspace in under five minutes. No credit card, no sales call required to get started.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Book a demo',
}

export const footer = {
  brand: 'NOVA',
  tagline: 'Build better. Work smarter.',
  columns: [
    {
      title: 'Product',
      links: ['Features', 'Solutions', 'Pricing', 'Changelog', 'Integrations'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Help center', 'API docs', 'Community', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy policy', 'Terms of service', 'Security'],
    },
  ],
  social: ['Twitter', 'LinkedIn', 'GitHub'],
  legal: `© ${new Date().getFullYear()} NOVA Technologies, Inc. All rights reserved.`,
}
