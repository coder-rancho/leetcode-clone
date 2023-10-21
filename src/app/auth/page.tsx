import React from 'react';
import Navbar from '@/components/Navbar/Navbar'
import AuthModal from '@/components/Modals/AuthModal'

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <>
        {/* Auth Page */}
        <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
            <div className="max-w-7xl mx-auto">
                <Navbar /> 
                <div className="flex justify-center items-center h-[calc(100vh)]
                pointer-events-none select-none
                ">
                    <img src="/hero.png" alt="hero" />
                </div>
            </div>
        </div>

        {/* Modal */}
        <AuthModal />
        </>
    )
}
export default page;