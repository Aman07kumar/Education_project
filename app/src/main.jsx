import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClassProvider } from './Context/ClassContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassProvider>
      <App />
    </ClassProvider>
  </React.StrictMode>
);
