import React from 'react'
import NavigationBar from '../../components/NavigationBar'

const Home = ({ children }) => {
  return (
    <div className='w-full flex'>
      <NavigationBar/> 
      <main className='grow'>
        {children} 
      </main>
    </div>
  )
}

export default Home
