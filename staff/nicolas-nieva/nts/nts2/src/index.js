import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { context } from './logic'

context.API_URL = process.env.REACT_APP_API_URL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
