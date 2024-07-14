import React from 'react'

const Home = ({ children }) => {
  return (
    <div className='w-full flex'>
      <main className='grow'>
        {children} 
      </main>
    </div>
  )
}

export default Home
