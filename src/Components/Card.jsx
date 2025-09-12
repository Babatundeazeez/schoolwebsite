import React from 'react'

const Card = ({image, title, subtitle,description,myclass}) => {
  return (
    <div className=' bg-yellow-400 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow mt-10'>
            {/* image */}
        <img src={image} 
        alt={title} 
        className='w-full h-40 object-cover'
        />
        {/* card-content */}
        <div className='p-4 space-y-2'>
            <h3 className='text-lg font-bold text-gray-800'>{title}</h3>
            <p className='text-sm text-gray-500'>{subtitle} </p>
            <p className='text-gray-700 mt-2 text-base'>{description} </p>
            <p className='text-sm text-gray-500'>{myclass}</p>

        </div>


    </div>
  )
}

export default Card