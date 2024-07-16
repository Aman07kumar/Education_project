// components/teacher/ExamList.js

import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ExamList = () => {
  const { className, section } = useParams();
  const { classes, deleteExam } = useContext(ClassContext);
  const classDetails = classes.find(cls => cls.className === className && cls.section === section);

  if (!classDetails) {
    return (
      <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">Class not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Exams for {className} - Section {section}</h2>
        <Link
          to={`/teacher/class/${className}/${section}/add-exam`}
          className="mb-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Add New Exam
        </Link>
        {classDetails.exams.length === 0 ? (
          <p className="text-lg text-center text-gray-600">No exams available.</p>
        ) : (
          <ul className="space-y-2">
            {classDetails.exams.map((exam, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors duration-300"
              >
                <div>
                  <div className="font-semibold text-gray-800">{exam.name}</div>
                  <div className="text-gray-600">{exam.date}</div>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/teacher/class/${className}/${section}/exams/${index}`}
                    className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <FaEdit className="mr-1" />
                    <span>Edit</span>
                  </Link>
                  <button
                    onClick={() => deleteExam(className, section, index)}
                    className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <FaTrashAlt className="mr-1" />
                    <span>Delete</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExamList;
