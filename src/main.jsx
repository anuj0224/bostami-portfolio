import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import About from './pages/About/About.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Contact from './pages/Contacts/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
      path:"/",
      element: <About/>
      },
      {
        path:"/resume",
        element: <Resume/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/contacts",
        element:<Contact/>
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
