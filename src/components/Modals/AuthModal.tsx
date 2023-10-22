import React from 'react';
import { IoClose } from 'react-icons/io5'
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';

type AuthModalProps = {
     
};

const AuthModal:React.FC<AuthModalProps> = () => {
    
    return (
        <>
        <div className="modal fixed top-0 left-0 h-full w-full bg-black bg-opacity-50
        flex items-center justify-center">
            <div className="card w-full sm:w-[450px]
            p-8 rounded-lg
            text-white bg-gradient-to-b from-brand-orange to-slate-900">

                <div className="close-button w-full flex justify-end">
                    <IoClose className='h-5 w-5 cursor-pointer'/>
                </div>

                <div className="card-content">
                    <ResetPassword /> 
                </div>
            </div>
        </div>
        </>
    )
}

export default AuthModal;