import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import { FaBook, FaPlus, FaTrashAlt, FaInfoCircle } from 'react-icons/fa';

const ClassList = ({ showExamLink }) => {
  const { classes, deleteClass } = useContext(ClassContext);

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      {showExamLink && (
        <div className="flex justify-end mb-8">
          <Link
            to="/teacher/class/create"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2"
          >
            <FaPlus />
            <span>Create New Class</span>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {classes.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center col-span-full">
            <p className="text-lg font-semibold text-gray-600">No classes registered yet.</p>
          </div>
        ) : (
          classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-400 rounded-full">
                  <FaBook className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{cls.className}</h3>
                  <p className="text-sm text-gray-500">
                    <strong>Section:</strong> {cls.section}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                {showExamLink ? (
                  <>
                    <Link
                      to={`/teacher/class/${cls.className}/${cls.section}`}
                      className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2"
                    >
                      <FaInfoCircle />
                      <span>View Details</span>
                    </Link>
                    <button
                      onClick={() => deleteClass(cls.className, cls.section)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2"
                    >
                      <FaTrashAlt />
                      <span>Delete</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to={`/teacher/class/${cls.className}/${cls.section}/exams`}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2"
                  >
                    <FaInfoCircle />
                    <span>View Exams</span>
                  </Link>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClassList;
