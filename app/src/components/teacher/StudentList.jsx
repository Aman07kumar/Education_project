import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import { FaPlus, FaArrowLeft, FaTrashAlt } from 'react-icons/fa';

const StudentList = () => {
  const { className, section } = useParams();
  const { classes, deleteStudent } = useContext(ClassContext);

  const classDetails = classes.find(cls => cls.className === className && cls.section === section);

  if (!classDetails) {
    return (
      <div className="p-4 md:p-10 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Class not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between mb-6">
        <Link
          to={`/teacher/class/${className}/${section}/add-student`}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
        >
          <FaPlus />
          <span>Add Student</span>
        </Link>
        <Link
          to="/teacher/class/list"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
        >
          <FaArrowLeft />
          <span>Back to Classes</span>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          {classDetails.className} - {classDetails.section}
        </h2>
        {classDetails.students.length === 0 ? (
          <p className="text-lg text-center text-gray-600">No students enrolled yet.</p>
        ) : (
          <ul className="space-y-4">
            {classDetails.students.map((student, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors duration-300"
              >
                <div>
                  <span className="font-semibold text-gray-700">{student.name}</span> -{' '}
                  <span className="text-gray-500">{student.rollNumber}</span>
                </div>
                <button
                  onClick={() => deleteStudent(className, section, student.rollNumber)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full shadow-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
                >
                  <FaTrashAlt />
                  <span>Delete</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentList;
