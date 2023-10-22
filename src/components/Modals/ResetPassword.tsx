import React from 'react';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <div className="ResetPassword flex flex-col gap-4">
            <h1 className='text-2xl font-medium'
            >Reset Password</h1>

            <p>Forgot your password? Enter your email address below, we'll send you an email to reset it.</p>

            <form action="/signup">
                <label htmlFor="email">Your email</label>
                <input type="email" id='email' placeholder='john@gmail.com'/>
                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}
export default ResetPassword;