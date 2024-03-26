import React from 'react'
import Logo from "../assets/dark.png"

const Header = () => {
  return (
    <>
    <div className='flex flex-row justify-between'>
    <div className='p-2'>
        <img src={Logo} alt='logo' />
    </div>
      <div className="my-auto  flex flex-row  text-xl text-white mr-4">
        <ul className='flex flex-row space-x-8   '>
            <li className='p-2'>Markets</li>
            <li className='p-2'> Trade</li>
            <li className='p-2'>P2P</li>
            <li className='p-2'>Swap</li>
            <li className='p-2'>Airdrop</li>
            <li className='p-2'> Referral</li>
            <li className='p-2'>Login</li>
            <li className='bg-blue-700 rounded-lg p-2 px-4'>Sign Up</li>
            
        </ul>


      </div>
      </div>
    </>
    
  )
}

export default Header
