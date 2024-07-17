import React from 'react';
import { FaBook, FaSchool, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeacherDashBoard = () => {
  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link to='/' className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[200px]">
          <div className="p-3 bg-blue-500 rounded-full">
            <FaBook className="text-white text-2xl md:text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg md:text-xl font-semibold">Subjects</h3>
            <p className="text-3xl md:text-4xl font-bold">24</p>
          </div>
        </Link>
        <Link to='/teacher/class/list' className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[200px]">
          <div className="p-3 bg-green-500 rounded-full">
            <FaSchool className="text-white text-2xl md:text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg md:text-xl font-semibold">Classes</h3>
            <p className="text-3xl md:text-4xl font-bold">12</p>
          </div>
        </Link>
        <Link to='/teacher/exam/list' className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center min-h-[200px]">
          <div className="p-3 bg-red-500 rounded-full">
            <FaClipboardList className="text-white text-2xl md:text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg md:text-xl font-semibold">Exams</h3>
            <p className="text-3xl md:text-4xl font-bold">8</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TeacherDashBoard;
