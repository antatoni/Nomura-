import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SessionProvider } from './contexts/SessionStorage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Register from './components/Register.tsx';
import Login from './components/Login.tsx';
import Dashboard from './components/Dashboard.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <RouterProvider router={router}></RouterProvider>
    </SessionProvider>
  </StrictMode>
);
