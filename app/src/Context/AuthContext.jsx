import React, { createContext, useState, useEffect } from 'react';
import users from '../Dummy/users.json'; // Import your dummy data

const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  signup: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  // Initialize currentUser from session storage
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = sessionStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Update session storage whenever currentUser changes
  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true; // Successful login
    }
    return false; // Failed login
  };

  const signup = (userData) => {
    // In a real app, you'd send data to the backend
    // For now, let's just add to our local users array
    users.push({ id: users.length + 1, ...userData });
    setCurrentUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem('currentUser'); 
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
