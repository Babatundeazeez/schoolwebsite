import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { authContext, } from '../Context/AuthContext'


const NavBarSection = () => {
   
   const {isOpen, setIsOpen} = useContext(authContext)

  return (
    <nav className='bg-white shadow-md fixed w-full top-0 left-0 z-50'>
        
        <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center'>
            {/* logo section */}
            <div className='text-2xl font-bold text-blue-500 flex-end'>
            My school Logo
            </div>

            {/* Desktop Menu */}
            <div>
                 <h1 className='text-xl font-bold'>Delight Group of School</h1>
           
             </div>


             <div>
                {/* <Button variant='success'>Search Button</Button> */}
             </div>

           

        </div>
        

    </nav>
  )
}

export default NavBarSection