// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "PulseCRM is live",
    titleBefore: "The modern",
    titleHighlight: "CRM",
    titleAfter: "built for startup velocity",
    subtitle:
      "PulseCRM is your internal CRM—maximize focus, automate flows, and bring your team closer to revenue. Cohesive, composable, and startup-tuned.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "PulseCRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Made possible by trusted partners",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why PulseCRM",
    heading: "The internal CRM for founders who move fast",
    description:
      "PulseCRM gives you production-ready building blocks for lead capture, pipeline management, and collaborative workflows—without the bloat.",
    items: [
      {
        icon: "Blocks",
        title: "Stay in Flow",
        description: "Unified workspace integrates email, notes, and automations in one dashboard.",
      },
      {
        icon: "LineChart",
        title: "Track Team Health",
        description: "Pipelines, deal stages, and lead status at a glance, always up-to-date.",
      },
      {
        icon: "Wallet",
        title: "Less Admin Overhead",
        description: "Replace spreadsheets and copy-paste routines—PulseCRM automates the busywork.",
      },
      {
        icon: "Sparkle",
        title: "Founder-Centric UX",
        description: "Clean, responsive UI puts productivity over complexity so teams can actually use their CRM.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything your internal CRM needs",
    subtitle:
      "PulseCRM is designed for startups to personalize and extend, giving you the essentials while keeping your workflow flexible.",
    items: [
      { icon: "TabletSmartphone", title: "Fully Responsive", description: "Every feature works beautifully on any device—no sacrifices." },
      { icon: "BadgeCheck", title: "Team & Permissions", description: "Multi-member support out of the box (owner, admin, member roles)." },
      { icon: "Goal", title: "Deal & Lead Tracking", description: "Customizable pipeline stages with drag-and-drop coming soon." },
      { icon: "PictureInPicture", title: "Notes & Activity", description: "Centralize context on deals, log calls and interactions." },
      { icon: "MousePointerClick", title: "Email & Automations", description: "Automated follow-ups and notifications right from the CRM." },
      { icon: "Newspaper", title: "Integrations Ready", description: "Connect with email, calendar, and sync to your existing stack." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Ready for your next deal",
    subtitle:
      "Automated flows, robust team structure, and zero-bloat interfaces help you close faster.",
    items: [
      { title: "Auth & Security First", description: "Email/password login with verification, SSO in roadmap.", pro: false },
      { title: "Data Ownership", description: "Host on your own cloud—keep all leads and notes in your database.", pro: false },
      { title: "Launch-Ready Patterns", description: "From onboarding to pipeline, PulseCRM sets up the basics for you.", pro: false },
      { title: "Strong Foundations", description: "Open source, audit-friendly, and deployable in any startup stack.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Startups growing with PulseCRM",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Co-founder, FinchFlow", comment: "PulseCRM drastically reduced our onboarding time—it's so much easier now to actually USE our pipeline as a team.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "We replaced three tools with PulseCRM. The onboarding and notes features are genuinely useful.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Growth Manager, AlphaLab", comment: "Really fast to get started—finally, a CRM that's startup-minded.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "Getting multi-member roles and real pipeline logic in our stack without complexity was a huge win.", rating: 4.8 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the PulseCRM builders",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
          { name: "X", url: "https://x.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for growing teams",
    subtitle: "Flexible plans to fit your stage. Start free, scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for an early-stage team or a solo founder.",
        buttonText: "Start free",
        benefits: [
          "Up to 3 team members",
          "Unlimited deals & notes",
          "Custom pipelines",
          "Email automations (coming soon)",
          "Self-host or 1-click deploy"
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 29,
        description: "Everything startups need for advanced team workflows.",
        buttonText: "Start trial",
        benefits: [
          "Unlimited team members",
          "Team permissions & SSO (soon)",
          "Advanced automations",
          "API & integrations",
          "Priority support",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "For scaling teams that need custom workflows, support, or integrations.",
        buttonText: "Contact us",
        benefits: [
          "Enterprise onboarding",
          "Dedicated pipeline consulting",
          "Custom feature requests",
          "Uptime SLAs",
          "Phone & email support"
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Contact PulseCRM",
    description:
      "Have questions or feedback, or want a personalized demo? Reach out—PulseCRM is built for startups like yours.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Phone", value: "N/A" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Mon - Fri", "9AM - 6PM PT"] },
    },
    formSubjects: ["PulseCRM Demo", "CRM Customization", "Integration Help", "Pricing and Plans"],
    formSubmitLabel: "Send",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "CRM Questions",
    items: [
      { question: "Is PulseCRM ready for production?", answer: "Absolutely. PulseCRM is production-ready and designed for internal usage by startups." },
      { question: "Can I invite my team?", answer: "Yes, multi-user support and roles are included in every plan." },
      { question: "What integrations are available?", answer: "Core integrations like email and calendar are planned; APIs are available for custom needs." },
      { question: "Is my data secure?", answer: "You own all your data—host it yourself or deploy to Vercel/Railway with secure defaults." },
      { question: "Can I customize pipelines?", answer: "Yes, stage and field configuration is simple and open for tweaks." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "PulseCRM",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
          { label: "X", href: "https://x.com/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2026 PulseCRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "PulseCRM",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "PulseCRM preview" },
    features: [
      { title: "Team Management", description: "Multi-role, invite flow, and user management ready." },
      { title: "Workflow Automation", description: "Trigger actions, reminders, and syncs with zero code." },
      { title: "Data Control", description: "Keep all your CRM data in your cloud—no third-party SaaS lock-in." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View PulseCRM on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}