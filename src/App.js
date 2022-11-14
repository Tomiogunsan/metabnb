import React, {useState} from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Footer from './component/Footer'
import Wallet from './component/Wallet'
import {Route, Routes } from 'react-router-dom'
import Place from './Pages/Place'

function App(props) {

  const [showModal, setShowModal] = useState(false)

    const modalIsShown = () =>{
      setShowModal(true)
      console.log('click')
    }

    const hideModal = () => {
      setShowModal(false)
    }

    
  return (
    <div>
     {showModal && <Wallet onClose={hideModal}/>}
      <Navbar onShowModal={modalIsShown}/>
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/place' element={<Place/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
