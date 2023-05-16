import { LandingPageConfig, PortfolioItemConfig } from 'types';
import { GoCode, GoPencil } from 'react-icons/go';
import { AiTwotoneSetting } from 'react-icons/ai';

export const landingPageConfig: LandingPageConfig = {
  mainNav: [
    {
      title: 'Services',
      href: '#services',
    },
    {
      title: 'Portfolio',
      href: '#portfolio',
    },
    {
      title: 'Skills',
      href: '#skills',
    },
    {
      title: 'Process',
      href: '#process',
    },
    {
      title: 'Contact',
      href: '#contact',
      type: 'button',
    },
  ],
};

export const servicesConfig = [
  {
    icon: GoPencil,
    title: 'DESIGN',
    text: 'I create custom website designs that reflect your brand and engage your target audience. My designs are intuitive and easy to navigate, with a focus on responsive design to ensure your website looks great on all devices. I use a variety of design techniques and stay up-to-date on the latest trends to ensure your website looks modern and fresh.',
  },
  {
    icon: GoCode,
    title: 'DEVELOPMENT',
    text: "I can design and build a customized website that reflects your unique brand and meets your specific business needs. Whether you're starting from scratch or need a redesign, I can help you create a stunning and effective online presence.",
  },
  {
    icon: AiTwotoneSetting,
    title: 'DESIGN',
    text: 'I create custom website designs that reflect your brand and engage your target audience. My designs are intuitive and easy to navigate, with a focus on responsive design to ensure your website looks great on all devices. I use a variety of design techniques and stay up-to-date on the latest trends to ensure your website looks modern and fresh.',
  },
];

export const porfolioItemsConfig: PortfolioItemConfig[] = [
  {
    title: 'Blessed',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/blessed.jpg',
    github: 'https://github.com/',
    demo: 'https://google.com/',
  },
  {
    title: 'Demo2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/divinv.jpg',
    github: 'https://github.com/',
    demo: 'https://google.com/',
  },
];
