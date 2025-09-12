import React from 'react'

import { Swiper, SwiperSlide  } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const CarouselHome = () => {
  return (
    <div className=' max-w-6xl mx-auto mt-6'>
        <Swiper 
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000}}
        pagination={{ clickable: true}}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        className='w-full'
        >
            {/* slideOne */}
            <SwiperSlide>
                <div className='relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/6]'>
                    <img 
                    src="/image/fourKids.jpg" 
                    alt="four Student"
                    className='w-full h-full object-cover rounded-xl' 
                    />
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4'>
                        <h2 className='text-xl sm:text-3xl md:text-5xl font-bold text-white'>
                            Welcome to Delight Group of School
                        </h2>

                    </div>

                </div>

            </SwiperSlide>

            {/* SlideTwo */}
            <SwiperSlide>
                <div className='relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/6]'>
                    <img 
                    src="/image/kidsTwo.jpg" 
                    alt="twoKids"
                    className='w-full h-full object-cover rounded-xl' 
                    />
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center px-4'>
                        <h2 className='text-xl sm:text-3xl md:text-5xl font-bold text-white px-4'>
                            Nurturing Excellence, Building Character,A leading provider for excellent
                            Nurturing Excellence, Building Character,A leading provider for excellent
                        </h2>

                    </div>

                </div>

            </SwiperSlide>

            {/* SliderThree */}
            <SwiperSlide>
                <div className='relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/6]'>
                    <img src="/image/childrenImg2.jpg" 
                    alt="Happy Student"
                    className='w-full h-full object-cover rounded-xl' 
                    />
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center px-4'>
                        <h2 className='text-xl sm:text-3xl md:text-5xl font-bold text-white'>
                            Admission Now Open, Give your child a delightful future
                        </h2>

                    </div>

                </div>

            </SwiperSlide>



        </Swiper>

    </div>
  )
}

export default CarouselHome