import React from 'react'
import Button from '../Components/Button'

const SignIn = () => {
  return (
    <div className='p-6'>
        <div className='bg-white shadow-sm rounded-xl p-2 w-full max-w-md'>
        {/* header........ */}
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>
            SignIn
        </h1>
        {/* form........ */}
        <form action="">
            {/* email..... */}
            <div className='mb-3'>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Email :
                </label>
                <input 
                type="email" 
                name="" 
                id=""
                placeholder='Enter Email'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                />
            </div>
            {/* password........ */}
            <div className='mb-3'>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Password :
                </label>
                <input 
                type="password" 
                name="" 
                id=""
                placeholder='Enter your Password'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                />
            </div>
            <div className='text-left mt-2'>
                <Button variant='warning'>Sign In</Button>
            </div>
        </form>

        </div>
    </div>
  )
}

export default SignIn