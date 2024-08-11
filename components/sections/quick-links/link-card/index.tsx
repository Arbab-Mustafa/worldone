import { textVariant } from '@/lib/utils/motion';
import { motion } from 'framer-motion';
import React from 'react';

interface QuickLinkProps {
  title: string;
  subtitle: string;
  icon: string;
  url: string;
}

const quickLinks = [
  {
    title: 'Crypto Multisender',
    subtitle: '',
    icon: '/links/multisender.svg',
    url: 'https://multisender.oneworldchain.org',
  },
  {
    title: 'Create ERC20 Token',
    subtitle: '',
    icon: '/links/erc20.svg',
    url: 'https://mint.oneworldchain.org',
  },
  {
    title: 'OWC Docs',
    subtitle: '',
    icon: '/links/docs.svg',
    url: 'https://docs.oneworldchain.org',
  },
  {
    title: 'Github',
    subtitle: '',
    icon: '/links/github.svg',
    url: 'https://github.com/oneworldchain',
  },
  {
    title: 'OWC Token',
    subtitle: '',
    icon: '/links/owc.svg',
    url: '#owct',
  },
  {
    title: 'Explorer',
    subtitle: '',
    icon: '/links/explorer.svg',
    url: 'https://mainnet.oneworldchain.org',
  },
  {
    title: 'Dev Tools',
    subtitle: '',
    icon: '/links/dev.svg',
    url: 'https://faucet.oneworldchain.org',
  },
  {
    title: 'Status',
    subtitle: '',
    icon: '/links/status.svg',
    url: 'https://status.oneworldchain.org',
  },
  {
    title: 'Stake',
    subtitle: '',
    icon: '/links/stake.svg',
    url: 'https://staking.oneworldchain.org/',
  },
  {
    title: 'Bridge',
    subtitle: '',
    icon: '/links/bridge.svg',
    url: 'https://bridge.oneworldchain.org',
  },
  {
    title: 'SOCIALfi',
    subtitle: 'Coming in 2025',
    icon: '/links/socialfi.svg',
    url: '',
  },
  {
    title: 'GAMEfi',
    subtitle: 'Coming in 2025',
    icon: '/links/gamefi.svg',
    url: '',
  },
  {
    title: 'Contests',
    subtitle: '',
    icon: '/links/contests.svg',
    url: 'https://oneworldchain.org/contests',
  },
  {
    title: 'Partners',
    subtitle: '',
    icon: '/links/partners.svg',
    url: 'https://oneworldchain.org/partners',
  },
];

const QuickLinkCard: React.FC<QuickLinkProps> = ({
  title,
  subtitle,
  icon,
  url,
}) => (
  <motion.div
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.75 }}
  >
    <motion.a
      variants={textVariant(0.2)}
      target='_blank'
      rel='noopener noreferrer'
      className='col-span-1 flex flex-col h-full items-center gap-5 rounded-[14px] border border-[#1D1D2114] bg-[#FAFAFB] p-[26px] pt-[42px] !no-underline hover:bg-white hover:shadow-[9px_19px_38px_0px_#A5B4FC] transition duration-150'
      href={url}
    >
      <div className='css-0'>
        <img alt='icon' src={icon} className='h-12 w-12' />
      </div>
      <p className='chakra-text css-0 text-center text-base font-medium md:text-lg'>
        {title}
        <br />
        {subtitle}
      </p>
    </motion.a>
  </motion.div>
);

const QuickLinkCards = () => (
  <div className='grid grid-cols-2 gap-4  md:grid-cols-2'>
    {quickLinks.map((link) => (
      <QuickLinkCard key={link.title} {...link} />
    ))}
  </div>
);

export default QuickLinkCards;
