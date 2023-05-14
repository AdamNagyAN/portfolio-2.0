import { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  type?: 'button' | 'text';
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  logo: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedIn: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type LandingPageConfig = {
  mainNav: MainNavItem[];
};

export type PortfolioItemConfig = {
  image: string;
  title: string;
  badges: string[];
  text: string;
  link?: string;
};
