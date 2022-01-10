import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"

import UserProvider from './context/UserContext';
import AppProvider from './context/AppContext';
import App from './App';

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
