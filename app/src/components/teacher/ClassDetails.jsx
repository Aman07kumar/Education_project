import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import AddStudent from './AddStudent';
import { FaPlus, FaArrowLeft, FaTrashAlt, FaInfoCircle } from 'react-icons/fa';

const ClassDetails = () => {
  const { className, section } = useParams();
  const { classes, deleteStudent } = useContext(ClassContext);
  const [showAddStudent, setShowAddStudent] = useState(false);

  // Find the class details from the context
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
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <Link
          to="/teacher/class/list"
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Classes</span>
        </Link>
        <button
          onClick={() => setShowAddStudent(true)}
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <FaPlus className="mr-2" />
          <span>Add Student</span>
        </button>
        <Link
          to={`/teacher/class/${className}/${section}/exams`}
          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <FaInfoCircle className="mr-2" />
          <span>Exam Details</span>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {classDetails.className} - {classDetails.section}
        </h2>
        <div className="space-y-2 mb-4">
          <p><strong>Grade:</strong> {classDetails.grade || 'N/A'}</p>
          <p><strong>Subject:</strong> {classDetails.subject || 'N/A'}</p>
          <p><strong>Teacher:</strong> {classDetails.teacher || 'N/A'}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Students</h3>
          {classDetails.students.length === 0 ? (
            <p className="text-lg text-center text-gray-600">No students enrolled yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {classDetails.students.map((student, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.rollNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => deleteStudent(className, section, student.rollNumber)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrashAlt className="inline-block mr-1" />
                          Delete
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
      {showAddStudent && (
        <AddStudent
          classData={classDetails}
          onClose={() => setShowAddStudent(false)}
        />
      )}
    </div>
  );
};

export default ClassDetails;
