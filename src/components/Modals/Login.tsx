import { authModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const handleForgotPassword = () => {
        setAuthModalState(prev => ({...prev, type: 'forgotPassword'}))
    }

    const handleCreateAccount = () => {
        setAuthModalState(prev => ({...prev, type: 'signup'}))
    }

    return (
        <div className="Login flex flex-col gap-4">
            <h1 className='text-2xl font-medium'
            >Sign in to Leetcode</h1>

            <form action="/login">
                <label htmlFor="email">Your email</label>
                <input type="email" id='email' placeholder='john@gmail.com'/>
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
                Not Registered?
                <a href='#' className='text-blue-700'
                onClick={handleCreateAccount}
                > Create account</a>
            </div>
        </div>
    )
}
export default Login;