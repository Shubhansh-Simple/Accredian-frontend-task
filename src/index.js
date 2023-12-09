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

import reportWebVitals from './reportWebVitals';

// Css file
import './index.css';

// Local
import App        from './App';
import HomeScreen from './screens/HomeScreen';


/* 
 * Consist all routes of our application
 * Router - Mapping URL with Pages 
 */
const router = createBrowserRouter(
  createRoutesFromElements(

    // Parent is App.js
    <Route path='/'
           element={ <App /> }>

      {/* HomeScreen Page */}
      <Route index={true} 
             path='/' 
             element={ <HomeScreen /> }/>

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


