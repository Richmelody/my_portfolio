// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure you're using the correct import
//import './index.css';
import App from './app';  // This imports the App component
import reportWebVitals from './reportWebVitals';

// Get the root element from the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
