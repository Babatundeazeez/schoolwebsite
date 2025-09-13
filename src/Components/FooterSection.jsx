import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'


const FooterSection = () => {
  return (
    
    <footer className='bg-gray-900 text-gray-300 py-10 mt-10 md:ml-48 w-full  '>
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {/* logo...... */}
            <div>
                <h2 className='text-2xl font-bold text-white mb-4'>
                    Delight Group of School
                </h2>
                <p className='text-sm'>
                Nurturing excellence and building character. We prepare students to
                be responsible, confident, and compassionate leaders of tomorrow.
                </p>
            </div>
            {/* quickLinks..... */}
            <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
                <ul className='space-y-2 text-sm'>
                    <li><Link to="/" className='hover:text-yellow-400'>Home</Link></li>
                    <li><Link to="/aboutUs" className='hover:text-yellow-400'>About Us</Link></li>
                    <li><Link to="/admission" className='hover:text-yellow-400'>Admission</Link></li>
                    <li><Link to="/contact" className='hover:text-yellow-400'>Contact</Link></li>

                </ul>
            </div>
            {/* contact info .............*/}
            <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Contact Us</h3>
                <ul className='space-y-2 text-sm'>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkerAlt /> 124, Ibadan, Oyo state
                    
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaPhone /> 081 0180 6661
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaEnvelope /> info@delightschool.com

                    </li>

                </ul>
            </div>
            {/* social media handle....... */}
            <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Follow Us @</h3>
                <div className='flex gap-4 text-xl'>
                    <Link to="#" className='hover:text-yellow-400'><FaFacebook/></Link>
                    <Link to="#" className='hover:text-yellow-400'><FaTwitter /></Link>
                    <Link to="#" className='hover:text-yellow-400'><FaInstagram /></Link>

                </div>
            </div>
            {/* footer button........... */}
           

        </div>
        <div className='mt-10 border-t border-gray-700 pt-4 text-center text-sm'>
                <p>©{new Date().getFullYear()} Delight Group of School. All right reserved</p>
                <p>Develop by Babzeeztech Solution</p>

            </div>

    </footer>
  )
}

export default FooterSection