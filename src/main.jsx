import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';
import Payment from './components/pages/payment';
import Service from './components/pages/service';
import Contact from './components/pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/payment',
    element: <Payment></Payment>
  },
  {
    path: '/services',
    element: <Service></Service>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);