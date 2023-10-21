import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
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
                <a href="/reset-password" className="text-sm text-brand-orange">Forgot Password?</a>
            </div>

            <div className="create-account text-gray-300">
                Not Registered? <a href='#' className='text-blue-700'>Create account</a>
            </div>
        </div>
    )
}
export default Login;