import React, {createElement} from 'react';
// import React from 'react';
import { render } from 'react-dom'
// import { render } from 'react-dom';
import App from './components/App.jsx';
import './style.css';

render(
  <App />,
  document.getElementById('root')
);