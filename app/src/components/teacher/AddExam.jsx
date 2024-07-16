// components/AddExam.js

import React, { useState } from 'react';

const AddExam = ({ classData, onClose }) => {
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [examDetail, setExamDetail] = useState('');
  const [fullMarks, setFullMarks] = useState('');

  const handleAddExam = () => {
    const newExam = {
      name: examName,
      date: examDate,
      detail: examDetail,
      fullMarks,
      scores: [],
    };
    // Add logic to save the exam
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Exam</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Exam Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Exam Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Exam Detail</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={examDetail}
            onChange={(e) => setExamDetail(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Full Marks</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={fullMarks}
            onChange={(e) => setFullMarks(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddExam}
          >
            Add Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
