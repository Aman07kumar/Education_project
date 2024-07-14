import React, { useContext } from 'react';
import Logo from '../../assets/Logo.png';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TeacherNavigationBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/users/login'); 
  };

  return (
    <div className="px-4 py-4 md:px-10 md:py-12 flex flex-col md:border md:border-r-1 md:w-1/5 h-auto md:h-screen bg-white shadow-lg">
      <div className="logo-div flex items-center space-x-3 mb-4 md:mb-8 justify-start"> 
        <img src={Logo} className="w-12 h-12 md:w-16 md:h-16" alt="Logo" />
        <span className="text-base md:text-lg font-semibold">EduTrack</span>
      </div>

      {currentUser && (
        <div className="teacher-info mb-6">
          <h3 className="text-lg font-bold text-gray-800">Welcome, {currentUser.name}</h3> 
        </div>
      )}

      <nav className="flex flex-col space-y-4">
        <button onClick={() => navigate('/home')} className="nav-button text-left">Home</button>
        <button onClick={() => navigate('/teacher/class/create')} className="nav-button text-left">Create Class</button>
        <button onClick={() => navigate('/#')} className="nav-button text-left">Subject List</button>
        <button onClick={() => navigate('/teacher/class/list')} className="nav-button text-left">View Classes</button>
        <button onClick={() => navigate('/#')} className="nav-button text-left">Exams</button>
      </nav>

      {currentUser && (
        <div className="logout-button mt-auto">
          <button onClick={handleLogout} class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherNavigationBar;
