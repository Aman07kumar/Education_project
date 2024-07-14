import React from 'react';
import StudentNavigationBar from './StudentNavigationBar';

const StudentLayout = ({ children }) => {
  return (
    <div className='w-full flex'>
      <StudentNavigationBar />
      <main className='grow'>
        {children}
      </main>
    </div>
  );
};

export default StudentLayout;
