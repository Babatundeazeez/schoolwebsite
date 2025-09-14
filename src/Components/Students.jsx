import React from 'react'
import Button from './Button'

const Students = () => {
  return (
    <div className='p-6'>
        <div className='bg-white shadow-lg rounded-xl p-2 w-full max-w-md'>
            {/* header.............. */}
                <h2 className='text-3xl font-bold text-gray-700'>
                    Student Profile Page 
                </h2>
                <form action="" className='space-y-4'>
                    {/* surname........ */}
                    <div>
                        <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                                First Name :
                        </label>
                        <input 
                        type="text"
                        placeholder='Enter First Name'
                        id=''
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                    {/* firstName............. */}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Middle Name :
                        </label>
                        <input 
                        type="text"
                        placeholder='Enter Middle Name'
                        id=''
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    {/* last Name...... */}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Last Name :
                    </label>
                    <input 
                        type="text"
                        placeholder='Enter Last Name'
                        id=''
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    {/* Age......... */}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Age :
                    </label>
                    <input 
                        type="number"
                        placeholder='Enter Age'
                        id=''
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    {/* sex ...........*/}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Sex :
                    </label>
                    <select 
                    name="" 
                    id=""
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        <option value="">--select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    
                    </div>
                    {/* class........ */}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Class :
                    </label>
                    <select 
                    name="" 
                    id=""
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        <option value="">--Class--</option>
                        <option value="nursery">Nursery</option>
                        <option value="primary">Primary</option>
                        <option value="college">College</option>
                    </select>
                    </div>
                    {/* Number.............. */}
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left'>
                            Parent no. :
                    </label>
                    <input 
                        type="number"
                        placeholder='Enter Guidance/Parent contact'
                        id=''
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />

                    </div>
                    {/* submit button */}
                    <div className='text-left'>
                        <Button variant='success'>Register</Button>

                    </div>

                </form>
            

        </div>
    </div>
  )
}

export default Students