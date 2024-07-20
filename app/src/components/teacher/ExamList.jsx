import React, { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ClassContext } from "../../Context/ClassContext";
import { FaPlus, FaEdit, FaTrashAlt, FaChartBar } from "react-icons/fa";

const ExamList = () => {
  const { className, section } = useParams();
  const { classes, deleteExam } = useContext(ClassContext);
  const classDetails = classes.find(
    (cls) => cls.className === className && cls.section === section
  );

  const [expandedExamId, setExpandedExamId] = useState(null);
  const navigate = useNavigate();

  const toggleExamDetails = (examId) => {
    setExpandedExamId(examId === expandedExamId ? null : examId);
  };

  const handleAddScoreClick = (examName) => {
    navigate(`/teacher/class/${className}/${section}/add-score/${examName}`);
  };

  const handleAnalyzeClick = (examName) => {
    navigate(`/teacher/class/${className}/${section}/exams/${examName}/analysis`); // Remove analysisType from this route
  };

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
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Exams for {className} - Section {section}
        </h2>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classDetails.exams.map((exam) => (
                  <React.Fragment key={exam.id}>
                    <tr
                      onClick={() => toggleExamDetails(exam.id)}
                      className="cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {exam.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {exam.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                        {exam.detail}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-end space-x-3">
                        <Link
                          to={`/teacher/class/${className}/${section}/exams/${exam.name}`}
                          className="text-yellow-600 hover:text-yellow-900"
                        >
                          <FaEdit className="inline-block" />
                        </Link>
                        <button
                          onClick={() => deleteExam(className, section, exam.id)} // Assuming you've updated deleteExam to use id
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrashAlt className="inline-block" />
                        </button>
                      </td>
                    </tr>
                    {expandedExamId === exam.id && (
                      <tr>
                        <td colSpan="4" className="px-6 py-4">
                          <div className="bg-gray-100 p-4 rounded-md">
                            <p className="font-semibold">Exam Details:</p>
                            <p>Date: {exam.date}</p>
                            <p>Full Marks: {exam.fullMarks}</p>
                            <p>Details: {exam.detail}</p>

                            {/* Add Score and Analyze buttons */}
                            <div className="flex space-x-2"> 
                              <Link
                              
                                to={`/teacher/class/${className}/${section}/add-score`}
                                className="flex items-center text-blue-600 hover:text-blue-900 px-4 py-2 bg-white rounded-md shadow-sm font-semibold text-sm"
                              >
                                <FaPlus className="inline-block mr-1" />
                                Add Score
                              </Link>
                              <Link
                                to={`/teacher/class/${className}/${section}/exams/${exam.name}/analysis`}
                                className={`flex items-center text-green-600 hover:text-green-900 px-4 py-2 bg-white rounded-md shadow-sm font-semibold text-sm ${
                                  !exam.scores || exam.scores.length === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                                onClick={(e) => {
                                  if (!exam.scores || exam.scores.length === 0) {
                                    e.preventDefault(); 
                                  }
                                }}
                              >
                                <FaChartBar className="inline-block mr-1" />
                                Analyze
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
