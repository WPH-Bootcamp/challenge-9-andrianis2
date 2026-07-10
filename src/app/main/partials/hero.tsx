'use client';

import { motion } from 'framer-motion';
import { Search, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-black'>
      {/* Background */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60' />

      {/* Navbar */}
      <nav className='relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-6'>
        <div className='flex items-center gap-4'>
          <LoaderCircle className='h-11 w-11 animate-spin text-white' />
          <span className='text-3xl font-bold text-white'>Foody</span>
        </div>

        <div className='hidden items-center gap-4 md:flex'>
          <Button
            variant='outline'
            className='h-12 rounded-full border-white bg-white/10 px-12 text-white backdrop-blur-md hover:bg-white hover:text-black'
          >
            Sign In
          </Button>

          <Button className='h-12 rounded-full bg-white px-12 font-semibold text-black hover:bg-orange-500 hover:text-white'>
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className='relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6'>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mx-auto max-w-4xl text-center'
        >
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl font-extrabold tracking-wide text-white md:text-6xl'
          >
            Explore Culinary Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className='mt-5 text-lg font-medium text-white/90 md:text-2xl'
          >
            Search and refine your choice to discover the perfect restaurant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mx-auto mt-10 flex h-16 max-w-2xl items-center rounded-full bg-white px-5 shadow-2xl'
          >
            <Search className='h-6 w-6 text-gray-400' />

            <Input
              type='text'
              placeholder='Search restaurants, food and drink'
              className='border-0 bg-transparent text-base shadow-none outline-none ring-0 focus-visible:ring-0'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
