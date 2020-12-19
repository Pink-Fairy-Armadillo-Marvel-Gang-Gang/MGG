const React = require('react')
// import React from 'react';
const { render } = 'react-dom'
// import { render } from 'react-dom';
import App from './client/components/App.jsx';
import './client/style.css';

render(
  React.createElement(App, null, null),
  document.getElementById('root')
);