import React from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';


const NotFound = () => (
  <Router>
    <Redirect to='/' />
  </Router>
);

export default NotFound;
