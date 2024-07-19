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
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Exams for {className} - Section {section}</h2>
        <Link
          to={`/teacher/class/${className}/${section}/add-exam`}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mb-6"
        >
          Add New Exam
        </Link>
        {classDetails.exams.length === 0 ? (
          <p className="text-lg text-center text-gray-600">No exams available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classDetails.exams.map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">{exam.detail}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/teacher/class/${className}/${section}/exams/${index}`}
                        className="text-yellow-600 hover:text-yellow-900 mr-3"
                      >
                        <FaEdit className="inline-block" />
                      </Link>
                      <button
                        onClick={() => deleteExam(className, section, index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrashAlt className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamList;
