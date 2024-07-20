import React, { createContext, useState, useEffect } from 'react';
import dummyClasses from '../Dummy/dummy'; // Import your dummy data

const ExamDataContext = createContext({
  examData: null,
  setExamData: () => {},
  passFailData: null,
  setPassFailData: () => {},
  aboveBelowData: null,
  setAboveBelowData: () => {},
  histogramData: null,
  setHistogramData: () => {},
  genderPerformanceData: null,
  setGenderPerformanceData: () => {},
  individualMarksData: null,
  setIndividualMarksData: () => {},
});

export const ExamDataProvider = ({ children }) => {
  const [examData, setExamData] = useState(null);
  const [passFailData, setPassFailData] = useState(null);
  const [aboveBelowData, setAboveBelowData] = useState(null);
  const [histogramData, setHistogramData] = useState(null);
  const [genderPerformanceData, setGenderPerformanceData] = useState(null);
  const [individualMarksData, setIndividualMarksData] = useState(null);

  useEffect(() => {
    if (examData) {
      // Calculate passing criteria, average, etc.
      const passingScore = examData.fullMarks * 0.4;
      const averageScore =
        examData.scores.reduce((sum, score) => sum + score, 0) /
        examData.scores.length;

      // Prepare data for Pass/Fail chart
      const passedCount = examData.scores.filter(score => score >= passingScore).length;
      const failedCount = examData.scores.filter(score => score < passingScore).length;
      setPassFailData([
        { name: "Passed", value: passedCount },
        { name: "Failed", value: failedCount },
      ]);

      // Prepare data for Above/Below Average chart
      const aboveAverageCount = examData.scores.filter(score => score >= averageScore).length;
      const belowAverageCount = examData.scores.filter(score => score < averageScore).length;
      setAboveBelowData([
        { name: "Above Average", value: aboveAverageCount },
        { name: "Below Average", value: belowAverageCount },
      ]);

      // Prepare data for Histogram Chart
      const histogramData = {};
      for (let i = 0; i <= examData.fullMarks; i += 10) {
        const binStart = i;
        const binEnd = i + 9;
        const count = examData.scores.filter(score => score >= binStart && score <= binEnd).length;
        histogramData[`${binStart}-${binEnd}`] = count;
      }
      setHistogramData(Object.entries(histogramData).map(([range, value]) => ({ range, value })));

      // Prepare data for Gender Performance Chart
      const genderData = {};
      dummyClasses.find(c => c.className === examData.className && c.section === examData.section).students.forEach(student => {
        if (!genderData[student.gender]) {
          genderData[student.gender] = [];
        }
        const studentIndex = dummyClasses.find(c => c.className === examData.className && c.section === examData.section).students.indexOf(student);
        genderData[student.gender].push(examData.scores[studentIndex]);
      });
      setGenderPerformanceData(Object.entries(genderData).map(([gender, scores]) => ({
        gender,
        averageScore: scores.reduce((sum, score) => sum + score, 0) / scores.length,
      })));

      // Prepare data for Individual Marks Chart
      setIndividualMarksData(dummyClasses.find(c => c.className === examData.className && c.section === examData.section).students.map((student, index) => ({
        name: student.name,
        score: examData.scores[index],
      })));
    }
  }, [examData]); // This useEffect runs when examData changes

  return (
    <ExamDataContext.Provider value={{ 
      examData, setExamData, passFailData, aboveBelowData,
      histogramData, genderPerformanceData, individualMarksData,
    }}>
      {children}
    </ExamDataContext.Provider>
  );
};
