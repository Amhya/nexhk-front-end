'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import useScroll from '@/hook/use-scroll'
import { cn } from '@/lib/utils'
import BreadcrumbsUi from './breadcrumbs'

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const breadcrumbs = usePathname();

  return (
    <div
      className={(`sticky inset-x-0 mx-4 top-10 z-30 py-4  transition-all bg-gradient-to-b from-white/70 to-white/80 text-[#1c0708] border-solid border-white border-opacity-50 rounded-2xl overflow-hidden  ` )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">Logo</span>
          </Link>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl text-[#1c0708]'>
              Dashboard
            </h2>
            <div>
              <BreadcrumbsUi />
            </div>
            
          </div>
          
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header
