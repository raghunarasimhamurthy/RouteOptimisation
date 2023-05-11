import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DashBoard, RequestForm , ChoiceControl } from './components';
import Results from './components/Results';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[  
      {
        index: "/Dashboard",
        element: <DashBoard />,
      },
      {
        path: "/Dashboard",
        element: <DashBoard />,
      },
      {
        path: "/RequestForm",
        element: <RequestForm />,
      },
      {
        path: "/Results",
        element: <Results />,
      }       
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
