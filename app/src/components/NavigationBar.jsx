import React from 'react';
import Logo from './../assets/Logo.png';

const NavigationBar = () => {
  return (
    <div className='px-4 py-4 md:px-10 md:py-12 flex flex-col md:border md:border-r-1 md:w-1/5 h-auto md:h-screen bg-white shadow-lg'>
      <div className='logo-div flex items-center space-x-3 mb-4 md:mb-8'>
        <img src={Logo} className='w-12 h-12 md:w-16 md:h-16' alt="Logo" />
        <span className='text-base md:text-lg font-semibold'>EduTrack</span>
      </div>
    </div>
  );
}

export default NavigationBar;
