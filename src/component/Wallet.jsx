import React from 'react'
import Modal from '../UI/Modal'
import times from '../assets/Times.png'
import walletOne from '../assets/walletImage.png'
import arrow from '../assets/arrow.png'
import walletTwo from '../assets/walletImage2.png'


const Wallet = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className='flex  justify-between items-center border-b-[1px] p-2'>
        <p className='font-bold text-xl'>Connect Wallet</p>
        <img src={times} alt='/' onClick={props.onClose} />
      </div>
      <p className='py-4'>Choose your preferred wallet:</p>
      
      <div className='flex justify-between items-center rounded-xl bg-[#f8f9fa] border-[1px] border-[#cfd8dc] mb-4 p-2'>
        <img src={walletOne} alt='/' />
        <img src={arrow} alt='/' />
      </div>

      <div className='flex justify-between items-center rounded-xl  border-[#cfd8dc] border-[1px] mb-4 p-2'>
      <img src={walletTwo} alt='/' />
      <img src={arrow} alt='/' />
      </div>
    </Modal>
  )
}

export default Wallet
