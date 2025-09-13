import React from 'react'
import Button from '../Components/Button'
import CarouselHome from '../Components/CarouselHome'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import Card2 from '../Components/Card2'
import NewCard from '../Components/NewCard'

const Home = () => {
  return (
    
    <div className=''>
      <Link>
      </Link>
      <CarouselHome /> 
      {/* Second secton.................... */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-20 bg-white mt-2 ">
      {/* <CarouselHome /> */}
        <h3 className='text-2xl sm:text-3xl md:text-5xl font-bold text-green-500 mb-4'>
          Welcome to Delight Group of School
          </h3>
        <p className='text-lg md:text-xl text-gray-700 font-medium mb-2'>
          Nurturing Excellence, Building Character, A leading provider for excellent
          </p>
        <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6'>
          Enroll today and give your child the best foundation for a brighter future.
          </p>
       
       <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <Button variant='success'>Admission Now</Button>
        <Button variant='primary'>Contact Us</Button>
        
       </div>

       <div className='mt-10'>
        <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6'>
          At Delight Group of School, we     provide quality education in a safe and nurturing environment. 
            We combine academic excellence with moral training to prepare our students for future success.
        </p>
        

       </div>
    </div>
    {/* Third section................. */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
   <Link to='/'>
   <Card 
     image="/image/e-lib1.jpg"
     title="E-Library"
     description="Library is where student gain more knowledge in various aspect of course"
     />
     </Link>

    <Link to='/student'>
    <Card 
    image="/image/studentPortal-2.png"
    title="Student Portal"
    description="Student should click here to access their portal here"
    />
    </Link>
    <Link to='/'>
    <Card 
    image="/image/news-1.jpg"
    title="News Blog"
    description="Latest news Update around the school and the current affairs"
    />
    </Link>


    </div>
    <div className='bg-gradient-to-r from-gray-900 to-blue-400 text-white py-12 px-6 sm:px-12 md:px-20 rounded-xl shadow-lg mt-10'>
      <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center md:text-left'>
        Message From the Founder -
      </h2>
      {/* subheading ........*/}
      <h4 className='text-lg sm:text-xl font-semibold mb-4'>
      Welcome to Delight Group of Schools!
      </h4>
      {/* content........ */}
      <div className='space-y-4 text-sm sm:text-base md:text-lg leading-relaxed'>
      <p>
      At Delight Group of Schools, our mission is simple yet profound:{" "}
       <span className='font-semibold'>to nurture excellence and build character in every child entrusted to us.</span>
      </p>
      <p>
      When I founded this school, it was with a clear vision — to create a learning environment where children are not only taught to excel academically but are also guided to grow into{" "}
      <span className='font-semibold'> responsible, confident, and compassionate individuals.</span>
      </p>
      <p>
      We believe that true education goes beyond the classroom. It is about inspiring curiosity, instilling values, and preparing our students for a brighter tomorrow. That is why our programs are designed to balance{" "}
      <span className='italic'> academic excellence with moral instruction, creativity, and real-world skills.</span>
      </p>
      <p>
      To every parent and guardian, I say this:{" "} 
      <span className='font-semibold'>Thank you for trusting us with your child’s future.</span> We promise to uphold that trust by giving your child the best possible foundation for lifelong success.
      </p>
      <p>
      Together, let us build not just scholars, but leaders with{" "}
       <span className='font-semibold'>integrity, wisdom, and a heart for service</span>
      </p>
      {/* signature......... */}
      <div className='mt-8'>
      <p className='font-medium'>With warm regards,</p>
      <p className='mt-2 font-bold text-lg'>Azeez Aderemi Babatunde</p>
      <p className='text-sm sm:text-base text-gray-200'>Founder & Visionary, Delight Group of Schools</p>
      </div>
      </div>

    </div>
    {/* Another section....... */}
    <div className='mt-10 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      <div className='md:col-span-1'>
      <h2 className='text-xl md:text-2xl font-bold text-center md:text-left'>NEATEST CLASS OF THE WEEK</h2>
      </div>

      <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center max-w-5xl mx-auto'>
        <Card2
        title="Neatest Female of the week"
        subtitle="Mariam Anifowose"
        myclass="SSS3A"
         />
          <Card2
        title="Neatest Female of the week"
        subtitle="Summayah Babatunde"
        myclass="SSS3A"
         />
         <Card2
        title="Neatest Female of the week"
        subtitle="Khadijah Ireoluwa"
        myclass="SSS3B"
         />
      </div>
    </div>
    {/* Another section.................... */}

    <div className='mt-10 bg-gray-400 px-6 py-10'>
      <div className='md:col-span-1'>
      <h2 className='text-xl md:text-2xl font-bold mb-6 text-left'>Leatest News</h2>

      <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto'>
        <NewCard 
        image="/image/graduate-1.jpg"
        title="2025 Graduating student"
        author="By Azeez Aderemi Babatunde "
        description="Graduation Party"
        date="13th sep, 2025"
        myBtn="Learn more...."
        />

        <NewCard 
        image="/image/graduate-2.jpg"
        title="2025 Graduating student"
        author="By Azeez Aderemi Babatunde "
        description="Graduation Party"
        date="13th sep, 2025"
        myBtn="Learn more...."
        />

        <NewCard 
        image="/image/graduate-3.jpg"
        title="2025 Graduating student"
        author="By Azeez Aderemi Babatunde "
        description="Graduation Party"
        date="13th sep, 2025"
        myBtn="Learn more...."
        />

        <NewCard 
        image="/image/graduate-4.jpg"
        title="2025 Graduating student"
        author="By Azeez Aderemi Babatunde "
        description="Graduation Party"
        date="13th sep, 2025"
        myBtn="Learn more...."
        />

      </div>
      
      </div>

    </div>

        </div>
  )
}

export default Home