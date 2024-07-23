import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements } from 'react-router-dom';
// import TransactionForm from './TransactionForm';
// import TransactionPage from './TransactionPage';
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Announcements from './Announcements';
import ProtectedRoutes from './ProtectedRoutes';
import Login from './Login';
 
const router = createBrowserRouter(
  
//   [
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Dashboard />,
//         children: [
//           {
//             path: 'faq',
//             element: <FAQ />
//           },
//           {
//             path: 'announcements',
//             element: <Announcements />
//           },
//         ]
//       }
//     ]
//   },
// ]

createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/dashboard' element={<Dashboard />} />
       <Route element={<ProtectedRoutes />}>
         <Route path='/announcements' element={<Announcements />} />
         <Route path='/faq' element={<FAQ />} />
       </Route>
       <Route path='/login' element={<Login />} />
  </Route>
)

)
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 
reportWebVitals();
 
 