import React from 'react';
import ReactDOM from 'react-dom';

import { Home, Portfolio, Resume, Contact } from './components'
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
