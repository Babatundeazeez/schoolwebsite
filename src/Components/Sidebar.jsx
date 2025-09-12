import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'

const Sidebar = () => {
    const {isNavOpen,  setIsNavOpen,handleLinkBar} = useContext(authContext)
    
  return (
    <div className='flex min-h-screen'>
        <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 z-40 
          ${isNavOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

             
           
            <nav className='flex-1 p-4 '>
            <h2 className='text-2xl mt-16 font-bold p-4 border-b border-gray-700'>
                My Portal
            </h2>
           
                <ul className='space-y-4'>
                    <li>
                        <Link to="/" onClick={handleLinkBar} className='block p-2 rounded hover:bg-gray-700'>DashBoard</Link>
                    </li>
                    <li>
                        <Link to="/student" onClick={handleLinkBar} className='block p-2 rounded hover:bg-gray-700'>Student</Link>
                    </li>
                    <li>
                        <Link to="/teacher" onClick={handleLinkBar} className='block p-2 rounded hover:bg-gray-700'>Teacher</Link>
                    </li>
                    <li>
                        <Link to="/administration" onClick={handleLinkBar} className='block p-2 rounded hover:bg-gray-700'>Administration</Link>
                    </li>

                </ul>

            </nav>

        </aside>

       
        {/* Main Content */}
        <div className='flex-1 flex flex-col w-full md:ml-48'>
            <div className='bg-gray shadow p-4 flex justify-between items-center'>

            <button className='md:hidden p-2 bg-gray-800 text-white rounded ' onClick={()=>  setIsNavOpen(!isNavOpen)}> {isNavOpen ? "✖" : "☰"}</button>

            </div>

                 {/* page content */}
        <div className=''>
            <Outlet />
            
        </div>
        </div>
       

    </div>
  )
}

export default Sidebar