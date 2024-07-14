import React, { useContext } from 'react';
import TeacherNavigationBar from './TeacherNavigationBar';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TeacherLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/users/login');
  };

  return (
    <div className="w-full flex">
      <TeacherNavigationBar />
      <main className="grow">
        <div>
          {children} 
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;
