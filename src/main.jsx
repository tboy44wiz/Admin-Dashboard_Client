import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*==== Importing the Bootstrap5 CSS ====*/
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
