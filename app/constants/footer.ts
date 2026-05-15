export interface FooterLink {
  label: string
  to: string
}

export interface FooterSocial {
  icon: string
  href: string
  label: string
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export const FOOTER_SOCIALS: FooterSocial[] = [
  { icon: 'mdi-application-outline', href: '#', label: 'Website' },
  { icon: 'mdi-github', href: 'https://github.com', label: 'GitHub' },
  { icon: 'mdi-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
]
