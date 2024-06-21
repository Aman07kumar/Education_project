import React from 'react'
import DashBoard from '../../components/DashBoard'
import NavigationBar from '../../components/NavigationBar'
const Home = () => {
  return (
    <div className='w-full flex'>
      <NavigationBar/>  

      <main className='grow'>
        <DashBoard/>
      </main>
    </div>
  )
}

export default Home
