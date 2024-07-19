import React, { useState, useContext } from 'react';
import { ClassContext } from '../../Context/ClassContext';
import { useParams } from 'react-router-dom';
import { FaUserPlus, FaTimes } from 'react-icons/fa';

const AddStudent = ({ onClose }) => {
  const { className, section } = useParams();
  const { addStudent } = useContext(ClassContext);

  const [studentName, setStudentName] = useState('');
  const [gender, setGender] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !gender || !rollNumber || !email) {
      alert('Please fill out all fields.');
      return;
    }
    addStudent(className, section, { name: studentName, gender, rollNumber, email });
    setStudentName('');
    setGender('');
    setRollNumber('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center space-x-2">
          <FaUserPlus />
          <span>Add Student to {className} - {section}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full mb-4"
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter roll number"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full flex items-center space-x-2 justify-center"
          >
            <FaUserPlus />
            <span>Add Student</span>
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full flex items-center space-x-2 justify-center"
        >
          <FaTimes />
          <span>Close</span>
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
