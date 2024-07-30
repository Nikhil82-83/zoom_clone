'use client'
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import React from 'react'

const Sidebar = () => {
  const pathname=usePathname();
  return (
    <>
    <div>
      <section className='sticky left-0 top-0 h-screen w-fit flex flex-col justify-between bg-dark-1 pt-6 pb-28 text-white max-sm:hidden lg:w-[264px]'>

        <div className='flex flex-1 flex-col gap-6'>
         {sidebarLinks.map((link)=>{
          const isactive=pathname===link.Route ||  pathname.startsWith(link.Route);
          return (
            <>
            <div>
              <Link
              href={link.Route}
              key={link.label}
              className={cn('flex p-6 gap-4 rounded-lg items-center justify-start',{
                "bg-blue-1":isactive
              })}
              >
              {link.label}
              
              </Link>


            </div>
            
            </>


          )

         })}

        </div>
      </section>
        
    </div>
    </>

  )
}

export default Sidebar