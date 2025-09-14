import React from 'react'
import SignUp from '../../Context/SignUp'
import SignIn from '../../Context/SignIn'
import Students from '../../Components/Students'
import TeacherProfile from '../../Components/TeacherProfile'
import BlogContent from '../../Components/BlogContent'

const AdminDashBoard = () => {
  return (
    <div className=''>
      <h3 className='text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 mb-4'>
        welcome to AdminDashBoard
        </h3>
       <div className='bg-gray-400'>
       <h3 className='text-1xl sm:text-2xl md:text-2xl font-bold text-black-300 mb-4'>
        Teachers and Student register page
        </h3>
       <div className='grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        
         {/* Student Profiling...... */}
         <div>
          <Students />
        </div>
        {/* Teacher profiling............ */}
        <div>
          <TeacherProfile />
        </div>
       </div>
       </div>

       {/* Manage blog content post................. */}
       <div className='bg-gray-200'>
        <BlogContent />

       </div>


           

    </div>
  )
}

export default AdminDashBoard