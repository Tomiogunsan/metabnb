import React from 'react'
import group from '../assets/Group 4 -in-one.svg'


const componentOne = () => {
  return (
    <div class="grid md:grid-cols-2 gap-4 px-6 py-6">
    <div className='flex flex-col justify-center'>
        <h1 className='text-4xl md:text-5xl'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p className='text-lg md:text-xl py-4'>we provide you access to luxury and affordable houses in the metaverse, 
                        get a chance to turn your imagination to reality at your comfort zone </p>
                        <div className='border-[1px] border-[#A3A3A3] flex justify-between rounded-lg mt-2 '>
                        <input className='p-2'type='text' placeholder='Search for a location' />
                        <p className='px-[45px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff]'>Search</p>
                    </div>
    </div>
        <div  className=' flex justify-center items-center py-6' >
            <img src={group} alt='/'/>
        </div>
    </div>
  )
}

export default componentOne
