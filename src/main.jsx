import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainLayout/Root.jsx';
import Home from './components/Home.jsx';
import AddNewUser from './components/AddNewUser.jsx';
import Dashboard from './components/Dashboard.jsx';
import UpdateUser from './components/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        children:[
          {
            path:"/addUser",
            element:<AddNewUser></AddNewUser>
          },
          {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
            loader:()=> fetch("http://localhost:5000/users")
          },
          {
            path:"/update/:id",
            element:<UpdateUser></UpdateUser>,
            loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
          }
        ]
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
