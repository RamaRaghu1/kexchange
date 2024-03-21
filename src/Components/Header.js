import React from 'react'
import Logo from "../assets/dark.png"

const Header = () => {
  return (
    <>
    <div className='flex flex-row justify-between'>
    <div className='p-2'>
        <img src={Logo} alt='logo' />
    </div>
      <div className="my-auto  flex flex-row  text-xl text-white">
        <ul className='flex flex-row space-x-8 '>
            <li>Markets</li>
            <li>Trade</li>
            <li>P2P</li>
            <li>Swap</li>
            <li>Airdrop</li>
            <li>Referral</li>
            <li>Login</li>
         
            
        </ul>
        <button className='bg-blue-700 rounded-lg '>Sign Up</button>

      </div>
      </div>
    </>
    
  )
}

export default Header
