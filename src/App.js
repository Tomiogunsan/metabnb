import React from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Footer from './component/Footer'
import Wallet from './component/Wallet'

function App() {
  return (
    <div>
      <Wallet />
      <Navbar/>
      <Home />
      
      <Footer />
    </div>
  );
}

export default App;
