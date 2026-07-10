'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
      aria-label='Site header'
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        {/* logo */}
        <Image
          src='/images/logo.png'
          alt='logo'
          width={42}
          height={42}
          className='max-md:h-8 max-md:w-35.25'
        />
        <span className='font-extrabold'>Foody</span>

        {/* tombol */}

        <Button asChild className='hidden lg:flex' variant='outline'>
          <Link href='#'>Sign In</Link>
        </Button>
        <Button asChild className='hidden lg:flex'>
          <Link href='#'>Sign Up</Link>
        </Button>

        <Sheet>
          <SheetTrigger>
            <Menu
              className='cursor-pointer lg:hidden'
              aria-label='Open main navigation'
            />
          </SheetTrigger>
          <SheetContent>
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#'>Sign In</Link>
              </SheetClose>
            </Button>
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#'>Sign Up</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
