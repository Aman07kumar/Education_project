import React, { createContext, useState } from 'react';
import dummyClasses from '../Dummy/dummy.js';

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState(dummyClasses);

  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  return (
    <ClassContext.Provider value={{ classes, addClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };
