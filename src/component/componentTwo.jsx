import React from 'react'
import mbToken from '../assets/mbToken.svg'
import metaMask from '../assets/metaMask.svg'
import openSea from '../assets/opeanSea.svg'

const componentTwo = () => {
  return (
    <div className='bg-gradient-to-r from-[#A02279] to-[#A02279] h-16 flex justify-between items-center px-8'>
      <img className='w-24 md:w-32' src={mbToken} alt='/' />
      <img className='w-24 md:w-32' src={metaMask} alt='/' />
      <img className='w-24 md:w-32' src={openSea} alt='/' />
   </div>
  )
}

export default componentTwo
