// components/teacher/AddScore.js

import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClassContext } from '../../Context/ClassContext';

const AddScore = () => {
  const { className, section } = useParams();
  const { classes, addScore } = useContext(ClassContext);
  const navigate = useNavigate();

  const classDetails = classes.find(cls => cls.className === className && cls.section === section);

  const [scores, setScores] = useState(classDetails ? classDetails.students.map(student => ({ rollNumber: student.rollNumber, score: '' })) : []);
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    const newScores = [...scores];
    newScores[index].score = value;
    setScores(newScores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for validation
    const hasError = scores.some(({ score }) => parseInt(score, 10) > classDetails.fullMarks);
    if (hasError) {
      setError(`Scores should not be greater than the full marks (${classDetails.fullMarks}).`);
      return;
    }
    
    addScore(className, section, scores.map(({ rollNumber, score }) => ({ rollNumber, score: Number(score) })), classDetails.fullMarks);
    navigate(`/teacher/class/${className}/${section}/exams`);
  };

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Add Scores for {className} - Section {section}</h2>
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classDetails.students.map((student, index) => (
                  <tr key={student.rollNumber}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.rollNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <input
                        type="number"
                        value={scores[index]?.score || ''}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Submit Scores
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScore;
