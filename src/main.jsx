
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import ErrorPage from './Components/Error/ErrorPage';
import Services from './Components/Services/Services';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import About_Us from './Components/About/About_Us';
import ContactUs from './Components/About/ContactUs/ContactUs';
import ServiceDetail from './Components/ServiceDetails/ServiceDetail';
import AuthProvider from './Components/AuthProvider/AuthProvider';

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
       },
      {
        path : "/about_us",
        element : <About_Us></About_Us>
      },
      {
        path : "/Contact",
        element : <ContactUs></ContactUs>
      },
      {
        path : "/Home/:id",
        element : <ServiceDetail></ServiceDetail>,
        loader : () => fetch ('serviceData.json')
      }


    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
