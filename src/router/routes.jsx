import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Counter from '../pages/Counter';
import Todo from '../pages/Todo';
import App from '../App'

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Root component
      children: [
        { path: "/", element: <Counter /> }, // counter Page
        { path: "/todo", element: <Todo /> }, // To do  Page
      ],
    },
  ]);

export default routes
