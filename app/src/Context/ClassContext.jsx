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

  return (
    <ClassContext.Provider value={{ classes, addClass, updateClass, deleteClass, addStudent, deleteStudent }}>
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };
