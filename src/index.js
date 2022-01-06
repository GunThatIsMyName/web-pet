import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './context/AppContext';
import UserProvider from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
