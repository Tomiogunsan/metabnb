import React from 'react'
import imageOne from '../assets/adventure1.png'
import imageTwo from '../assets/adventure2.png'
import imageThree from '../assets/adventure3.png'
import imageFour from '../assets/adventure4.png'
import imageFive from '../assets/adventure5.png'
import imageSix from '../assets/adventure6.png'
import imageSeven from '../assets/adventure7.png'
import imageEight from '../assets/adventure8.png'



const cardTemplate = () => {
  return (
    <div className='w-full'>
      <h1 className='text-center text-4xl font-bold py-6 px-4'>Inspiration for your next adventure</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 px-8'>
          <img src={imageOne} alt='/' />
          <img src={imageTwo} alt='/' />
          <img src={imageThree} alt='/' />
          <img src={imageFour} alt='/' />
          <img src={imageFive} alt='/' />
          <img src={imageSix} alt='/' />
          <img src={imageSeven} alt='/' />
          <img src={imageEight} alt='/' />
      </div>
    </div>
  )
}

export default cardTemplate
