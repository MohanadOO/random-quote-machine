import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteBox from './components/QuoteBox.jsx'
import App from './App.js'

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <QuoteBox />
  </React.StrictMode>,
  document.getElementById('root')
);


