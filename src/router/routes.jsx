import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Counter from '../pages/Counter';
import Todo from '../pages/Todo';
import App from '../App'
import Dashboard from '../pages/admin/Dashboard';
import Login from '../pages/auth/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const routes = createBrowserRouter([
    {
      path: "/",
      element: ( <PrivateRoute><App /></PrivateRoute> ), // Root component
      children: [   
          //Private Routes    
           { path: "/", element: <Dashboard /> }, 
           { path: "/attendance", element: <Counter /> }, 
          
      ],
    },
    {
      path: "/",
      element: ( <PublicRoute><App /></PublicRoute> ), // Root component
      children: [   
          //publlic Routes    
          { path: "/login", element: <Login /> }, 
          
      ],
    },
    
  ]);

export default routes
