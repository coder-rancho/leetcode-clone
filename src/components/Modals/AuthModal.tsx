import React from 'react';
import { IoClose } from 'react-icons/io5'
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

type AuthModalProps = {
     
};

const AuthModal:React.FC<AuthModalProps> = () => {
    const authModal = useRecoilValue(authModalState)
    const setAuthModalState = useSetRecoilState(authModalState)

    const closeModal = () => {
        setAuthModalState((prev) => ({...prev, isOpen: false}))
    }

    return (
        <>
        <div className="modal fixed top-0 left-0 h-full w-full bg-black bg-opacity-50
        flex items-center justify-center">
            <div className="card w-full sm:w-[450px]
            p-8 rounded-lg
            text-white bg-gradient-to-b from-brand-orange to-slate-900">

                <div className="close-button w-full flex justify-end" onClick={closeModal}>
                    <IoClose className='h-5 w-5 cursor-pointer'/>
                </div>

                <div className="card-content">
                    {
                        authModal.type === 'login' ? <Login />
                        : authModal.type === 'signup' ? <Signup />
                        : authModal.type === 'forgotPassword' ? <ResetPassword />
                        : ''
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default AuthModal;