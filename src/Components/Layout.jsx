// import React, { useContext } from 'react'
// import Button from './Button'
// import { Link } from 'react-router-dom'
// import { authContext } from '../Context/AuthContext'

// const Layout = ({children}) => {
//   const {isOpen, setIsOpen} = useContext(authContext)
  
//   return (
//     <div className='flex min-h-screen'>
//       {/* Sidebar navbar */}
//       <aside className='w-64 bg-gray-800 text-white flex flex-col'>
//         <h2 className='text-2xl font-bold p-4'>My Portal</h2>
//         <nav className='flex-1'>
//           <ul>
//             <li className='p-4 hover:bg-gray-700 cursor-pointer'>Student Portal</li>
//             <li className='p-4 hover:bg-gray-700 cursor-pointer'>Teacher Portal</li>
//             <li className='p-4 hover:bg-gray-700 cursor-pointer'>Administration Portal</li>
//           </ul>

//         </nav>

//       </aside>

//       {/* main section  */}
//       <div className='flex-1 flex flex-col'>

//         {/* second Navbar */}
//         <header className='bg-white shadow p-4 flex justify-between items-center'>
//           {/* <h1 className='text-xl font-bold'>All is well group of school</h1> */}
//           <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
//                 <li><Link to="/" className='hover:text-blue-500'>Home</Link> </li>
//                 <li><Link to="/about" className='hover:text-blue-500'>About Us</Link> </li>
//                 <li><Link to="/academy" className='hover:text-blue-500'>Academy Programme</Link> </li>
//                 <li><Link to="/admision" className='hover:text-blue-500'>Admission</Link> </li>
//                 <li><Link to="/contact" className='hover:text-blue-500'>Contact Us</Link> </li>
                

//             </ul>
//           {/* <Button variant='secondary'>Log Out</Button> */}
//            {/* Mobile menu Button */}
//            <Button variant='secondary' onClick={()=> setIsOpen(!isOpen)}> {isOpen ? "✖" : "☰"}</Button>

//         </header>
//         {/* Page content */}
//         <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//             {children}
//         </main>

//       </div>

//     </div>
//   )
// }

// export default Layout