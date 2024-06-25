import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import MaxWidthWrapper from "@/components/MaxWIdthWrapper";

export const Navbar = () => {
  return (
    <>
    <MaxWidthWrapper>
        <nav className='navbar flex md:px-12 lg:px-32 justify-between bg-[#F0F0FE]'>
            <div className='logo-title flex'>
                <img src={'./images/logo.png'} className='w-16' />
                <h1 className='my-auto font-bold text-xl'><Link href='/'>Plan it</Link></h1>
                <ul className='hidden md:flex my-auto pl-4 font-medium'>
                    <li className='px-4'><Link href='/tasks'>Tasks</Link></li>
                    <li className='px-4'>Tracker</li>
                    <li className='px-4'>Calendar</li>
                    <li className='px-4'>About Us</li>
                </ul>
            </div>
            <div className="sign-in flex">
                    <Button variant='link' className='hidden md:flex my-auto'>Login</Button>
                    <Button variant='default' className='hidden md:flex my-auto'>Register</Button>
                </div>
            <IoMdMenu className='my-auto text-4xl md:hidden'/>
        </nav>
        </MaxWidthWrapper>
    </>
  )
}
