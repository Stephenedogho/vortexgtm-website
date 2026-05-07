export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'twitter';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    region: string;
    postal: string;
    country: string;
  };
  nav: NavLink[];
  legal: NavLink[];
  social: SocialLink[];
}

export const site: SiteConfig = {
  name: 'VORTEX GTM',
  tagline: 'Go-to-Market Engineering for category-defining B2B teams.',
  description:
    'VORTEX GTM is a Go-to-Market engineering agency that builds revenue infrastructure, demand systems, and pipeline operations for B2B SaaS and AI companies.',
  url: 'https://vortexgtm.com',
  email: 'hello@vortexgtm.com',
  phone: '+1 (415) 555-0142',
  address: {
    line1: '548 Market Street',
    line2: 'Suite 32418',
    city: 'San Francisco',
    region: 'CA',
    postal: '94104',
    country: 'United States',
  },
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vortexgtm/', icon: 'linkedin' },
    { label: 'X / Twitter', href: 'https://x.com/vortexgtm', icon: 'twitter' },
  ],
};
