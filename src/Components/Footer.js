import React from 'react'
import Logo from "../assets/Klogo.png"
const Footer = () => {
  return (
    <>
   
   <div className='flex md:flex-row flex-col justify-around space-4 text-slate-400'>
   <div className='p-4'>
    <img src={Logo} className='h-18 w-10'/>
    <p>Contact Us:</p>
    <p>Email id: support@kairaaexchange.com</p>
    <p>Support: +91 7092771155 , +91 7092771133</p>
    <p className='pt-2'>Kairaa believes that the best way to build </p>
    <p>trust for these new types of currencies is </p>
    <p>through fair and secure exchanges.</p>
   </div>
   <div className='p-4'>
    <h4 className='text-white text-xl font-bold'>Service</h4>
    <ul>
        <li className=' hover:text-white'>Asset Listing</li>
        <li className=' hover:text-white'>Referral Program</li>
        <li className=' hover:text-white'>Announcement</li>
        <li className=' hover:text-white'>Career</li>
    </ul>
   </div>
   <div className='p-4'>
   <h4 className='text-white text-xl font-bold'>Support</h4>
    <ul>
        <li className=' hover:text-white'>FAQ</li>
        <li className=' hover:text-white'>Fees</li>
        <li className=' hover:text-white'>Support Center</li>
        <li className=' hover:text-white'>Community</li>
        <li className=' hover:text-white'>Blog</li>
    </ul>
   </div>
   <div className='p-4'>
   <h4 className='text-white text-xl font-bold'>Legal</h4>
    <ul>
        <li className=' hover:text-white'>T&C</li>
        <li className=' hover:text-white'>Privacy Policy</li>
        <li className=' hover:text-white'>Refund Policy</li>
        <li className=' hover:text-white'>Withdrawal Policy</li>
        <li className=' hover:text-white'>KYC Policy</li>
        <li className=' hover:text-white'>Risk Policy</li>
    </ul>
   </div>
   </div>
   <div>
    <p className='text-white text-center text-sm p-2'>© Copyright 2024 - KAIRAA Exchange</p>
    <div>
        
    </div>
   </div>
   </>
  )
}

export default Footer
