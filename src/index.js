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
import App          from './App';
import HomeScreen   from './screens/HomeScreen';
import LoginScreen  from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

import PracticeScreen from './screens/PracticeScreen';


/* 
 * Consist all routes of our application
 * Router - Mapping URL with Pages 
 */
const router = createBrowserRouter(
  createRoutesFromElements(

    // Parent is App.js
    <Route path='/'
           element={ <App /> }>

      {/* Below urls will starts with '/' i.e. parent's url */}

      {/* HomeScreen Page */}
      <Route index={true} 
             path='/' 
             element={ <HomeScreen /> }/>

      {/* LoginScreen Page */}
      <Route index={true} 
             path='login' 
             element={ <LoginScreen /> }/>

      {/* SignupScreen Page */}
      <Route index={true} 
             path='signup' 
             element={ <SignupScreen /> }/>

      {/* SignupScreen Page */}
      <Route index={true} 
             path='practice' 
             element={ <PracticeScreen /> }/>

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


