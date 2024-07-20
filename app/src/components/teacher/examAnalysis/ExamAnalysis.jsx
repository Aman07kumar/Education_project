import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PassFailChart from "./PassFailChart";
// import TopBottomPerformers from "./TopBottomPerformers";
// import AboveBelowAverageChart from "./AboveBelowAverageChart";
// import HistogramChart from "./HistogramChart";
// import GenderPerformanceChart from "./GenderPerformanceChart";
// import IndividualMarksChart from "./IndividualMarksChart";
// import ExamDataContext from "../../../Context/ExamDataContext";
// import ScoreClusterChart from "./ScoreClusterChart";

const ExamAnalysis = () => {
  const { className, section, examName, analysisType } = useParams();

  const { examData, passFailData, aboveBelowData, histogramData, genderPerformanceData, individualMarksData, scoreClusterData } = useContext(ExamDataContext);

  const renderAnalysisComponent = () => {
    switch (analysisType) {
        case "Pass-Fail-Students-Ratio":
            return passFailData ? <PassFailChart data={passFailData} /> : null;
      case "Top-5-Performers":
        return individualMarksData ? <TopBottomPerformers data={individualMarksData.slice(0, 5)} /> : null; // Top 5 students by score
      case "Bottom-5-Performers":
        return individualMarksData ? <TopBottomPerformers data={individualMarksData.slice(-5).reverse()} /> : null; // Bottom 5 students by score
      case "Ratio-of-Students-Above-and-Below-Average-Marks":
        return aboveBelowData ? <AboveBelowAverageChart data={aboveBelowData} /> : null;
      case "Exam-Score-Distribution":
        return histogramData ? <HistogramChart data={histogramData} /> : null; 
      case "Gender-Based-Performance":
        return genderPerformanceData ? <GenderPerformanceChart data={genderPerformanceData} /> : null;
      case "Marks-For-Individual-Student-Analysis":
        return individualMarksData ? <IndividualMarksChart data={individualMarksData} /> : null;
      // case "Score-Cluster": // Assuming you've prepared scoreClusterData in ExamDataContext
      //   return scoreClusterData ? <ScoreClusterChart data={scoreClusterData} /> : null;
      default:
        return <p>Invalid analysis type</p>; 
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Exam Analysis: {examName} - {className} {section}</h2>
      {renderAnalysisComponent()}
    </div>
  );
};

export default ExamAnalysis;
