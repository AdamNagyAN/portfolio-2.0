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
    image: '/images/blessed.jpg',
    title: 'BLESSED COMMERCE',
    badges: ['React', 'Typescript'],
    text: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.\n',
    link: 'https://blessed-commerce.netlify.app/',
  },
  {
    image: '/images/blessed.jpg',
    title: 'BLESSED COMMERCE',
    badges: ['React', 'Typescript'],
    text: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.\n',
    link: 'https://blessed-commerce.netlify.app/',
  },
  {
    image: '/images/blessed.jpg',
    title: 'BLESSED COMMERCE',
    badges: ['React', 'Typescript'],
    text: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.\n',
    link: 'https://blessed-commerce.netlify.app/',
  },
];
