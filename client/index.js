import React from 'react';
// import React from 'react';
import { render } from 'react-dom'
// import { render } from 'react-dom';
import App from './components/App.jsx';
import './style.css';
import { BrowserRouter} from 'react-router-dom';


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);