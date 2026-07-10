'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

const exploreLinks = [
  { label: 'All Food', href: '/foods' },
  { label: 'Nearby', href: '/nearby' },
  { label: 'Discount', href: '/discount' },
  { label: 'Best Seller', href: '/best-seller' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Lunch', href: '/lunch' },
];

const helpLinks = [
  { label: 'How to Order', href: '/how-to-order' },
  { label: 'Payment Methods', href: '/payment-methods' },
  { label: 'Track My Order', href: '/track-order' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: FaLinkedinIn,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: FaTiktok,
  },
];

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <footer className='border-t border-white/70 bg-[#0b0f14] text-white mt-20'>
      <div className='mx-auto grid min-h-[690px] max-w-[1360px] grid-cols-1 gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.5fr_0.8fr_0.8fr] lg:gap-32 lg:py-28'>
        {/* Brand and social media */}
        <motion.div
          variants={columnVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <Link
            href='/'
            className='inline-flex items-center gap-4'
            aria-label='Foody home'
          >
            <Image
              src='/images/logo2.png'
              alt='foody'
              width={42}
              height={42}
              className='max-md:h-8 max-md:w-35.25'
            />
            <span className='text-4xl font-extrabold tracking-tight md:text-5xl'>
              Foody
            </span>
          </Link>

          <p className='mt-9 max-w-xl text-lg leading-10 text-white/90 md:text-xl'>
            Enjoy homemade flavors &amp; chef&apos;s signature dishes,
            <br className='hidden xl:block' />
            freshly prepared every day. Order online or visit our
            <br className='hidden xl:block' />
            nearest branch.
          </p>

          <div className='mt-14'>
            <h2 className='text-xl font-bold md:text-2xl'>
              Follow on Social Media
            </h2>

            <div className='mt-7 flex flex-wrap gap-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant='outline'
                      size='icon'
                      className='size-14 rounded-full border-slate-700 bg-transparent text-white hover:border-red-600 hover:bg-red-600 hover:text-white'
                    >
                      <a
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.label}
                      >
                        <Icon className='size-7' />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Explore */}
        <FooterColumn title='Explore' links={exploreLinks} delay={0.15} />

        {/* Help */}
        <FooterColumn title='Help' links={helpLinks} delay={0.3} />
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  delay?: number;
};

function FooterColumn({ title, links, delay = 0 }: FooterColumnProps) {
  return (
    <motion.div
      variants={columnVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay,
      }}
    >
      <h2 className='text-xl font-bold md:text-2xl'>{title}</h2>

      <ul className='mt-10 space-y-8'>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className='group inline-flex items-center text-lg text-white/90 transition-colors hover:text-red-500 md:text-xl'
            >
              <span className='relative'>
                {link.label}

                <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full' />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
