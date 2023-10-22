import { authModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const handleForgotPassword = () => {
        setAuthModalState(prev => ({...prev, type: 'forgotPassword'}))
    }

    const handleLogin = () => {
        setAuthModalState(prev => ({...prev, type: 'login'}))
    }
    
    return (
        <div className="Signup flex flex-col gap-4">
            <h1 className='text-2xl font-medium'
            >Register on Leetcode</h1>

            <form action="/signup">
                <label htmlFor="email">Your email</label>
                <input type="email" id='email' placeholder='john@gmail.com'/>
                <label htmlFor="name">Display Name</label>
                <input type="text" id='name' placeholder='John Doe' />
                <label htmlFor="password">Your password</label>
                <input type="password" id='password' placeholder='********'  />
                <button type="submit">Login</button>
            </form>

            <div className="unsubscribe-btn flex justify-end">
                <a href='#' className="text-sm text-brand-orange"
                onClick={handleForgotPassword}
                >Forgot Password?</a>
            </div>

            <div className="create-account text-gray-300">
                Already have an account? 
                <a href='#' className='text-blue-700'
                onClick={handleLogin}
                > Login</a>
            </div>
        </div>
    )
}
export default Signup;