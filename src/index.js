import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './context/AppContext';
import UserProvider from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
