import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"

import UserProvider from './context/UserContext';
import App from './App';
import AppProvider from './context/AppContext';

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
