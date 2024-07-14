// App.js

import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import CreateClass from './components/teacher/CreateClass';
import ListClass from './components/teacher/ListClass';
import AddStudent from './components/teacher/AddStudent';
import StudentList from './components/teacher/StudentList';
import ClassDetails from './components/teacher/ClassDetails';  // Import ClassDetails component
import { ClassProvider } from './Context/ClassContext';
import StudentDashBoard from './components/student/studentDashBoard';
import TeacherDashBoard from './components/teacher/teacherDashBoard';
import AuthContext from './Context/AuthContext';
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
          
          {/* Routes for student */}
          {currentUser && currentUser.role === 'student' && (
            <>
              <Route path="/home" element={<StudentLayout><StudentDashBoard /></StudentLayout>} />
            </>
          )}

          {/* Routes for teacher */}
          {currentUser && currentUser.role === 'teacher' && (
            <>
              <Route path="/home" element={<TeacherLayout><TeacherDashBoard /></TeacherLayout>} />
              <Route path="/teacher/class/create" element={<TeacherLayout><CreateClass /></TeacherLayout>} />
              <Route path="/teacher/class/list" element={<TeacherLayout><ListClass /></TeacherLayout>} />
              <Route path="/teacher/class/:className/:section" element={<TeacherLayout><ClassDetails /></TeacherLayout>} />
              <Route path="/teacher/class/:className/:section/add-student" element={<TeacherLayout><AddStudent /></TeacherLayout>} />
              <Route path="/teacher/class/:className/:section/students" element={<TeacherLayout><StudentList /></TeacherLayout>} />
            </>
          )}

          {/* Home page */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ClassProvider>
  );
}

export default App;
