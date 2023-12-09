/*
 * It's the url mapping with component file
 * like urls.py in django
 */

// React 
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Css file
import './index.css';

// Local
import App from './App';

import reportWebVitals from './reportWebVitals';

/* 
 * Consist all routes of our application
 * Router - Mapping URL with Pages 
 */

const router = createBrowserRouter(
  createRoutesFromElements(

    // Parent is App.js
    <Route path='/'
           element={ <App /> }>
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();


