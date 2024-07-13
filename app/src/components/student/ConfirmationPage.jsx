import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import { FaBook } from 'react-icons/fa';

const ConfirmationPage = () => {
  const { classes } = useContext(ClassContext);

  const handleClassClick = (cls) => {
    console.log(cls);
  };

  return (
    <div className="p-4 md:p-10 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      <div className="flex justify-end mb-6">
        <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          Create New Class
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.length === 0 ? (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-center justify-center min-h-[200px] col-span-3">
            <p className="text-lg md:text-xl font-semibold">No classes registered yet.</p>
          </div>
        ) : (
          classes.map((cls, index) => (
            <button
              key={index}
              onClick={() => handleClassClick(cls)}
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-center min-h-[200px] w-full text-left hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="p-3 bg-blue-500 rounded-full">
                <FaBook className="text-white text-2xl md:text-3xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg md:text-xl font-semibold">{cls.className}</h3>
                <p className="text-sm md:text-base"><strong>Section:</strong> {cls.section}</p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
