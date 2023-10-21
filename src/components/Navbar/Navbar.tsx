import React from 'react'
import Link from 'next/link'

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/"  className='flex items-center justify-center h-20'>
            <img src="/logo.png" alt="LeetClone" className="h-full" />
        </Link>
        <div className="flex items-center">
            <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium border-2 border-transparent
            hover:text-brand-orange hover:bg-white hover:border-brand-orange
            focus:outline-none
            transition transition-duration-300 ease-in-out"
            >Sign In</button>
        </div>
    </div> 
}
export default Navbar;