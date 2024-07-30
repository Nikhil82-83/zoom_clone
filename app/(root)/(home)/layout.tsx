
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React, { ReactNode } from 'react'


const HomeLayout = ({children}:{children: ReactNode}) => {
    return (
        <>
        <div className='relative'>
            <Navbar/>

            <div className='flex'>

                <Sidebar/>
                <section className='flex flex-col flex-1 min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>{children}</div>
                </section>



            </div>



        </div>
        





        
        <h1>footer</h1>
        </>
      )
    }


export default HomeLayout