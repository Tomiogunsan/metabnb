import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import group from '../assets/logo.svg'

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    

    const handleNav = () => {
        setNav(!nav)
       
    }

    

  return (
    //  <div class="container mx-auto px-4">
    <div className='w-full h-[80px] flex justify-between items-center px-6  '>
      <div>
        <img src={group} alt='Logo' style={{width: '60%'}}/>
      </div>

      <ul className='hidden md:flex justify-center items-center'>
        
        <Link to='/'><li>Home</li></Link>
       <Link to='/place'><li>Place to stay</li></Link>
        <li>NFTs</li>
        <li>Community</li>
        
        </ul>

        <div className=' hidden md:flex '>
        <button onClick={props.onShowModal} className=' px-[22px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff] rounded-lg'>Connect wallet</button>
       </div>

{/* Hamburger menu */}
      <div onClick={handleNav} className='md:hidden z-10'>
      {nav ?  <AiOutlineClose/>:  <HiOutlineMenuAlt4/>} 
       </div>

       {/* mobile menu */}
       <ul onClick={handleNav} className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#ffffff]'} >
       <Link to='/'><li className='py-4'>Home</li></Link>
       <Link to='/place'><li className='py-4'>Place to stay</li></Link>
       <li  className='py-4'>NFTs</li>
       <li  className='py-4'>Community</li>
       <li className='py-4'>
       <button className=' px-[22px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff] rounded-lg'>Connect wallet</button>
       </li>
        
       </ul>
    </div>
    // </div>



    // <div className='flex justify-between items-center py-8 w-full '>
    //     <div className=''>
    //     <img className='w-[70%] md:' src={group} alt='/'/>
    //     </div>

    //   <ul className='hidden md:flex justify-between '>
    //     <li>Home</li>
    //     <li>Place to stay</li>
    //     <li>NFTs</li>
    //     <li>Community</li>
    //   </ul>

    //   <div className=' hidden md:flex '>
    //     <button>Connect wallet</button>
    //   </div>

    //   {/* {harmburger} */}
    //   <div onClick={handleNav} className="md:hidden z-10  ">
    //             {nav ? < AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />  }
            
    //         </div>


    //    {/* {mobile menu} */}
    //    <div>
    //    <ul onClick={handleNav} className={nav ?'absolute left-0 top-0 w-full py-12 flex flex-col text-center bg-[#fff]' :  'absolute left-[-100%]'}>
    //     <li className='py-2 '>Home</li>
    //     <li className='py-2 '>Place to stay</li>
    //     <li className='py-2 '>NFTs</li>
    //     <li className='py-2 '>Community</li>
    //   </ul>
    //    </div>
    // </div>
    // </div>
  )
}

export default Navbar
