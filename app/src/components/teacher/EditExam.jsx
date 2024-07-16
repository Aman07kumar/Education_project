// components/teacher/EditExam.js

import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';

const EditExam = () => {
  const { className, section, examIndex } = useParams();
  const navigate = useNavigate();
  const { classes, updateExam } = useContext(ClassContext);
  const classDetails = classes.find(cls => cls.className === className && cls.section === section);
  const exam = classDetails?.exams[examIndex];

  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [examDetail, setExamDetail] = useState('');
  const [fullMarks, setFullMarks] = useState('');

  useEffect(() => {
    if (exam) {
      setExamName(exam.name);
      setExamDate(exam.date);
      setExamDetail(exam.detail);
      setFullMarks(exam.fullMarks);
    }
  }, [exam]);

  const handleUpdateExam = () => {
    const updatedExam = {
      name: examName,
      date: examDate,
      detail: examDetail,
      fullMarks: parseInt(fullMarks),
      scores: exam.scores
    };
    updateExam(className, section, examIndex, updatedExam);
    navigate(`/teacher/class/${className}/${section}/exams`);
  };

  if (!exam) {
    return (
      <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">Exam not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Exam</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdateExam(); }} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="examName">Exam Name</label>
            <input
              type="text"
              id="examName"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="examDate">Exam Date</label>
            <input
              type="date"
              id="examDate"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="examDetail">Details</label>
            <textarea
              id="examDetail"
              value={examDetail}
              onChange={(e) => setExamDetail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="fullMarks">Full Marks</label>
            <input
              type="number"
              id="fullMarks"
              value={fullMarks}
              onChange={(e) => setFullMarks(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Update Exam
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExam;
