import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { context } from './logic'

context.API_URL = process.env.REACT_APP_API_URL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
