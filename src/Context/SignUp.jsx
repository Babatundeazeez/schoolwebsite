import React from 'react'
import Button from '../Components/Button'

const SignUp = () => {
  return (
    <div className=' p-6'>
        {/* flex items-center justify-center  */}
       <div className='bg-white shadow-lg rounded-xl p-2 w-full max-w-md'>
        {/* Title */}
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>
            SignUp Page
        </h2>

        <form action="" className='space-y-4'>
            {/* Name.................... */}
            <div className=''>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Full Name :
                </label>
                <input 
                type="text"
                placeholder='Enter your name'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                
                />
            </div>
            {/* course........ */}
            <div className=''>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Degree :
                </label>
                <input 
                type="text"
                placeholder='Enter your Degree (Msc/Bsc/Hnd/Nce)'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                
                />
            </div>

                {/* email................. */}
            <div className=''>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Email Address :
                </label>
                <input 
                type="email"
                placeholder='Enter your email address'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                
                />
            </div>
            {/* Passwordword......................... */}
            <div className=''>
                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                    Password :
                </label>
                <input 
                type="password"
                placeholder='Enter your password'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                
                />
            </div>
            {/* <button type='submit' className='w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors'>sign Up</button> */}
            {/* signUpButton........... */}
            <div className='text-left'>
                <Button variant='success'>Sign Up</Button>
            </div>
            

        </form>

       </div>

    </div>
  )
}

export default SignUp