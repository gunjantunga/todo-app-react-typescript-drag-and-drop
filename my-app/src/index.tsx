import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// if you have face some error like this , just do one thing
//remove <React.StrictMode> from index.js file

// Compiled with problems:
// ×
// ERROR
// Invariant failed: Cannot find droppable entry with id [TodosList]
//     at http://localhost:3000/static/js/bundle.js:167406:58