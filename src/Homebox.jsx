

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import homeicon from './home.png'
import { Link } from 'react-router-dom';
const RoutingPage = ({children}) => {
  return (
  
      <div className='homebox'>
        <nav>
          <ul>
            <li>
           
            <img src={homeicon} alt="homeicon" />   <Link to="/Homepage"> Home </Link>
    
            </li>
            
          </ul>
        </nav>

      
      </div>
 
  );
};

export default RoutingPage;


