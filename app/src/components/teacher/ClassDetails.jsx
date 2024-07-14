import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';
import AddStudent from './AddStudent';

const ClassDetails = () => {
  const { className, section } = useParams();
  const { classes } = useContext(ClassContext);

  const classDetails = classes.find(cls => cls.className === className && cls.section === section);

  const [showAddStudent, setShowAddStudent] = useState(false);

  if (!classDetails) {
    return (
      <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">Class not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-6">
        <Link
          to="/teacher/class/list"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Back to Classes
        </Link>
        <button
          onClick={() => setShowAddStudent(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Add Student
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {classDetails.className} - {classDetails.section}
        </h2>
        {classDetails.students.length === 0 ? (
          <p className="text-lg text-center text-gray-600">No students enrolled yet.</p>
        ) : (
          <ul className="space-y-2">
            {classDetails.students.map((student, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors duration-300"
              >
                <div>
                  <span className="font-semibold text-gray-800">{student.name}</span> -{' '}
                  <span className="text-gray-600">{student.rollNumber}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
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
