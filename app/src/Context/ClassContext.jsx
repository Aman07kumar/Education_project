// Context/ClassContext.js

import React, { createContext, useState } from 'react';
import dummyClasses from '../Dummy/dummy.js';

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState(dummyClasses);

  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const updateClass = (updatedClass) => {
    setClasses(classes.map(cls => (cls.className === updatedClass.className && cls.section === updatedClass.section ? updatedClass : cls)));
  };

  const deleteClass = (className, section) => {
    setClasses(classes.filter(cls => cls.className !== className || cls.section !== section));
  };

  const addStudent = (className, section, student) => {
    setClasses(classes.map(cls => 
      cls.className === className && cls.section === section 
      ? { ...cls, students: [...(cls.students || []), student] } 
      : cls
    ));
  };

  const deleteStudent = (className, section, rollNumber) => {
    setClasses(classes.map(cls => 
      cls.className === className && cls.section === section 
      ? { ...cls, students: cls.students.filter(student => student.rollNumber !== rollNumber) } 
      : cls
    ));
  };

  const addExam = (className, section, newExam) => {
    setClasses(classes.map(cls => 
      cls.className === className && cls.section === section 
      ? { ...cls, exams: [...(cls.exams || []), newExam] } 
      : cls
    ));
  };

  const updateExam = (className, section, examIndex, updatedExam) => {
    setClasses(classes.map(cls => 
      cls.className === className && cls.section === section 
      ? { ...cls, exams: cls.exams.map((exam, index) => index === examIndex ? updatedExam : exam) } 
      : cls
    ));
  };

  const deleteExam = (className, section, examIndex) => {
    setClasses(classes.map(cls => 
      cls.className === className && cls.section === section 
      ? { ...cls, exams: cls.exams.filter((_, index) => index !== examIndex) } 
      : cls
    ));
  };

  return (
    <ClassContext.Provider value={{ classes, addClass, updateClass, deleteClass, addStudent, deleteStudent, addExam, updateExam, deleteExam }}>
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };
