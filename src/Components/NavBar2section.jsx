import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'
import Button from './Button'

const NavBar2section = () => {
    const {isOpen, setIsOpen,handleLinkBar} = useContext(authContext)
    
  return (
    <nav className='bg-green-100 p-2 shadow-md sticky w-full  left-0 z-30'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>
            {/* desktop view */}
        <ul className='hidden md:flex space-x-8 text-gray-700 font-medium mx-auto'>
                <li><Link to="/" className='hover:text-blue-500'>Home</Link> </li>
                <li><Link to="/about" className='hover:text-blue-500'>About Us</Link> </li>
                <li><Link to="/academy" className='hover:text-blue-500'>Academy Programme</Link> </li>
                <li><Link to="/admision" className='hover:text-blue-500'>Admission</Link> </li>
                <li><Link to="/contact" className='hover:text-blue-500'>Contact Us</Link> </li>
                

        </ul> 

           <div className='md:hidden'>
           <Button variant='secondary' onClick={()=> setIsOpen(!isOpen)}> {isOpen ? "✖" : "☰"}</Button>
            
           </div>
        
        </div>
          {/* On Mobile view */}
                {
                    isOpen && (
                        <div className='md:hidden bg-white shadow-md px-6 py-2'>
                            <ul className='space-y-4 text-gray-700 font-medium'>
                            <li><Link onClick={handleLinkBar} to="/" className='hover:text-blue-500'>Home</Link> </li>
                             <li><Link onClick={handleLinkBar} to="/about" className='hover:text-blue-500'>About Us</Link></li>
                            <li><Link onClick={handleLinkBar} to="/academy" className='hover:text-blue-500'>Academy Programe</Link> </li>
                            <li><Link onClick={handleLinkBar} to="/admision" className='hover:text-blue-500'>Admission</Link> </li>
                            <li><Link onClick={handleLinkBar} to="/contact" className='hover:text-blue-500'>Contact Us</Link> </li>
        
                                
        
                            </ul>
        
                        </div>
                    )
                }
    </nav>
  )
}

export default NavBar2section