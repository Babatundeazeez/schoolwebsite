import React from 'react'

const Card2 = ({ title, subtitle,myclass}) => {
  return (
    <div>
         <div className=' bg-green-400 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow mt-10'>
       
        {/* card-content */}
        <div className='p-4 space-y-2'>
            <h3 className='text-lg font-bold text-gray-800'>{title}</h3>
            <p className='text-sm text-gray-500'>{subtitle} </p>
            <p className='text-sm text-gray-500'>{myclass}</p>

        </div>


    </div>

    </div>
  )
}

export default Card2