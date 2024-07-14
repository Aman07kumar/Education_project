// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import CreateClass from './components/teacher/CreateClass';
import ListClass from './components/teacher/ListClass';
import { ClassProvider } from './Context/ClassContext';
import StudentDashBoard from './components/student/studentDashBoard';
import TeacherDashBoard from './components/teacher/TeacherDashBoard';
import AuthContext from './Context/AuthContext';
import { useContext } from 'react';
import StudentLayout from './components/student/StudentLayout';
import TeacherLayout from './components/teacher/TeacherLayout';
import Home from './pages/homePage/home';


function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <ClassProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />

          {/* Conditional rendering based on user role and using layouts */}
          {currentUser && currentUser.role === 'student' ? (
            <>
              <Route path="/home" element={<StudentLayout children={<StudentDashBoard />} />} /> 
            </>
          ) : currentUser && currentUser.role === 'teacher' ? (
            <>
              <Route path="/home" element={<TeacherLayout children={<TeacherDashBoard />} />} /> 
              <Route path="/teacher/class/create" element={<TeacherLayout children={<CreateClass />} />} />
              <Route path="/teacher/class/list" element={<TeacherLayout children={<ListClass />} />} />
            </>
          ) : null}
        </Routes>
      </Router>
    </ClassProvider>
  );
}

export default App;
