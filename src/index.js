import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Plans from './Plans';
ReactDOM.render(
  <> 
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  
  </>
 ,document.getElementById('root')
);
