import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import ErrorPage from './Components/Error/ErrorPage';
import Services from './Components/Services/Services';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/Services",
        element : <Services></Services>,
      },
      {
        path : "/register",
        element : <Register></Register>,
      },
      {
        path : "/login",
        element : <Login></Login>
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
