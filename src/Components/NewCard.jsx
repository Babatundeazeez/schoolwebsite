import React from 'react'
import Button from './Button'

const NewCard = ({image, title, author, description, date, myBtn }) => {
  return (
    <div className='bg-blue-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
        {/* image section */}
        <img 
        src={image} 
        alt={title}
        className='w-full h-40 object-cover'
        />
        {/* cradNews content */}
        <div className='p-4 space-y-2'>
            <h2 className='text-lg font-bold text-white'>{title}</h2>
            <h3 className='text-sm font-bold text-gray-500'>{author} | {date}</h3>
            {/* <p className='text-xs text-gray-500'>{date}</p> */}
            <h4 className='text-sm font-bold text-gray-700'>{description}</h4>
            <Button variant='success'>{myBtn}</Button>
            

        </div>

    </div>
  )
}

export default NewCard