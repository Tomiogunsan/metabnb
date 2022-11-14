import React from 'react'
import CardOne from '../component/componentOne'
import CardTwo from '../component/componentTwo'
import CardThree from '../component/componentThree'
import CardFour from '../component/componentFour'


const Home = () => {
  return (
    <div class=" w-full">
        {/* section one */}
          <CardOne />
            <br/>
        {/* section two */}
        <CardTwo />
            <br/>
        {/* section three */}
            <CardThree />
            <br/>
        {/* section four */}
            <CardFour />
       

    </div> 
  )
}

export default Home
