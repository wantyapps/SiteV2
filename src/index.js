import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let theme = localStorage.getItem('data-theme');
document.documentElement.setAttribute("data-theme", theme);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
