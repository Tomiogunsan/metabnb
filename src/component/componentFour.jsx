import React from 'react'
import image from '../assets/rotatingImage.png'

const componentFour = () => {
  return (
    <div className='bg-gradient-to-r from-[#A02279] to-[#A02279] grid md:grid-cols-2 px-8 text-[#ffffff]'>
      <div className='flex flex-col w-80 py-12 md:py-32'>
          <h1 className='text-3xl font-bold'>Metabnb NFTs</h1>
          <p className='py-8'>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs
            .These NFTs gives our customer access to loads of our exclusive services.
          </p>
          <div>
          <button className='bg-[#ffffff] text-[#A02279] px-8 py-4 rounded-lg'>Learn more</button>
          </div>
      </div>
      <div className='py-6 md:py-10'>
        <img className='w-[80%]' src={image} alt='/' />
      </div>
    </div>
  )
}

export default componentFour
