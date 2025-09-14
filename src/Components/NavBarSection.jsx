import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { authContext } from '../Context/AuthContext'


const NavBarSection = () => {
   // const [isOpen, setIsOpen] = useState(false)
   const {isOpen, setIsOpen} = useContext(authContext)

  return (
    <nav className='bg-white shadow-md fixed w-full top-0 left-0 z-50'>
        
        <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center'>
            {/* logo section */}
            <div className='text-2xl font-bold text-blue-500'>
                MySchool Logo
            </div>

            {/* Desktop Menu */}
            {/* <h1 className='text-xl font-bold'>Delight group of school</h1> */}
            <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
                <li><Link to="/" className='hover:text-blue-500'>Home</Link> </li>
                <li><Link to="/about" className='hover:text-blue-500'>About Us</Link> </li>
                <li><Link to="/academy" className='hover:text-blue-500'>Academy Programme</Link> </li>
                <li><Link to="/admision" className='hover:text-blue-500'>Admission</Link> </li>
                <li><Link to="/contact" className='hover:text-blue-500'>Contact Us</Link> </li>

            </ul>

            {/* Mobile menu Button */}
            <Button variant='secondary' onClick={()=> setIsOpen(!isOpen)}> {isOpen ? "✖" : "☰"}</Button>


        </div>
        {/* On Mobile view */}
        {
            isOpen && (
                <div className='md:hidden bg-white shadow-md px-6 py-4'>
                    <ul className='space-y-4 text-gray-700 font-medium'>
                    <li><Link to="/" className='hover:text-blue-500'>Home</Link> </li>
                     <li><Link to="/about" className='hover:text-blue-500'>About Us</Link></li>
                    <li><Link to="/academy" className='hover:text-blue-500'>Academy Programe</Link> </li>
                    <li><Link to="/admision" className='hover:text-blue-500'>Admission</Link> </li>
                    <li><Link to="/contact" className='hover:text-blue-500'>Contact Us</Link> </li>

                        

                    </ul>

                </div>
            )
        }

    </nav>
  )
}

export default NavBarSection