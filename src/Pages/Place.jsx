import React from 'react'
import location from '../assets/placeLocation.png'
import one from '../assets/place1.png'
import two from '../assets/place2.png'
import three from '../assets/place3.png'
import four from '../assets/place4.png'
import five from '../assets/place5.png'
import six from '../assets/place6.png'
import seven from '../assets/place7.png'
import eight from '../assets/place8.png'
import nine from '../assets/place9.png'
import ten from '../assets/place10.png'
import eleven from '../assets/place11.png'
import twelve from '../assets/place12.png'
import thirteen from '../assets/place13.png'
import fourteen from '../assets/place14.png'
import fifteen from '../assets/place15.png'
import sixteen from '../assets/place16.png'


const Place = () => {
  return (
    <div className='w-full px-8'>
      <div>
        <ul className='hidden md:flex justify-center items-center'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li><img src={location} alt='/' /></li>
        </ul>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-4 py-6'>
            <img src={one} alt='/' />
            <img src={two} alt='/' />
            <img src={three} alt='/' />
            <img src={four} alt='/' />
            <img src={five} alt='/' />
            <img src={six} alt='/' />
            <img src={seven} alt='/' />
            <img src={eight} alt='/' />
            <img src={nine} alt='/' />
            <img src={ten} alt='/' />
            <img src={eleven} alt='/' />
            <img src={twelve} alt='/' />
            <img src={thirteen} alt='/' />
            <img src={fourteen} alt='/' />
            <img src={fifteen} alt='/'/>
            <img src={sixteen} alt='/'/>
            
      </div>
    </div>
  )
}

export default Place
