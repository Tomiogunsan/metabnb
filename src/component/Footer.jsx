import React from 'react'
import facebook from '../assets/facebook.svg'
import logoTwo from '../assets/Group_footer.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import copyright from '../assets/copyright.svg'

const Footer = () => {
  return (
    <div className='w-full bg-[#1D1D1E] text-[#F1F3F9]'>
        {/* container */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-10 pt-8'>
        
        <div>
        <img className='mb-14' src={logoTwo} alt='/' />
        <div className='flex py-10'>
        <img  src={facebook} alt='/' />
        <img className='px-2' src={instagram} alt='/' />
        <img  className='px-2' src={twitter} alt='/' />
        </div>
        <img src={copyright} alt='/' />
            
        </div>

          <ul>
                <li className='font-bold text-lg py-2'>Community</li>
                <li className='py-2'>NFT</li>
                <li className='py-2'>Tokens</li>
                <li className='py-2'>Landlords</li>
                <li className='py-2'>Discord</li>
            </ul>

            <ul>
                <li className='font-bold text-lg py-2'>Places</li>
                <li className='py-2'>Castle</li>
                <li className='py-2'>Farms</li>
                <li className='py-2'>Beach</li>
                <li className='py-2'>Learn more</li>
            </ul>

            <ul>
                <li className='font-bold text-lg py-2'>About us</li>
                <li className='py-2'>Road map</li>
                <li className='py-2'>Creators</li>
                <li className='py-2'>Career</li>
                <li className='py-2'>Contact us</li>
            </ul>
        

        </div>
    </div>
  )
}

export default Footer