import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import Home from './pages/homePage/home';
import RegistrationForm from './components/student/RegistrationForm';
import ConfirmationPage from './components/student/ConfirmationPage';
import { ClassProvider } from './Context/ClassContext';

function App() {
  return (
    <ClassProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </ClassProvider>
  );
}

export default App;
