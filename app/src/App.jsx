import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import Home from './pages/homePage/home';
import CreateClass from './components/teacher/CreateClass';
import ListClass from './components/teacher/ListClass';
import { ClassProvider } from './Context/ClassContext';
import StudentDashBoard from './components/student/studentDashBoard';
import TeacherDashBoard from './components/teacher/TeacherDashBoard';
import AuthContext from './Context/AuthContext';
import { useContext } from 'react';

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <ClassProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              currentUser ? (
                currentUser.role === 'student' ? (
                  <Home>
                    <StudentDashBoard />
                  </Home>
                ) : (
                  <Home>
                    <TeacherDashBoard />
                  </Home>
                )
              ) : (
                <Login />
              )
            }
          />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/teacher/class/create" element={<CreateClass />} />
          <Route path="/teacher/class/list" element={<ListClass />} />
          <Route path="/student" element={<StudentDashBoard />} />
          <Route path="/teacher" element={<TeacherDashBoard />} />
        </Routes>
      </Router>
    </ClassProvider>
  );
}

export default App;
