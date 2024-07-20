import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const analysisTypes = [
  "Pass/Fail Students Ratio",
  "Top 5 Performers",
  "Bottom 5 Performers",
  "Ratio of Students Above and Below Average Marks",
  "Exam Score Distribution",
  "Gender-Based Performance",
  "Marks For Individual Student Analysis",
]; // Add your analysis types here

const ExamAnalysisList = () => {
  const { className, section, examName } = useParams();
  const navigate = useNavigate();

  const handleAnalysisClick = (analysisType) => {
    const formattedAnalysisType = analysisType
      .replaceAll(" ", "-")
      .replaceAll("/", "-");
    navigate(
      `/teacher/class/${className}/${section}/exams/${examName}/analysis/${formattedAnalysisType}`
    ); 
  };

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Exam Analysis: {examName}</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {analysisTypes.map((analysisType) => (
            <li key={analysisType}>
              <button
                onClick={() => handleAnalysisClick(analysisType)}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full text-left" // Apply similar button styling as before
              >
                {analysisType}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamAnalysisList;
