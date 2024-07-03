import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import TrandingBook from './pages/TrandingBook.jsx';
import NewRelease from './pages/new-releases/NewRelease.jsx';
import UpcommingBooks from './pages/UpcommingBooks.jsx';
import FavoriteBooks from './pages/FavoriteBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/trending-books",
        element: <TrandingBook />
      },
      {
        path: "/new-releases",
        element: <NewRelease />
      },
      {
        path: "/upcoming-books",
        element: <UpcommingBooks />
      },
      {
        path: "/favourite-books",
        element: <FavoriteBooks />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
