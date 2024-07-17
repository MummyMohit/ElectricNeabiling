import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { element } from 'prop-types';
import Signup from 'form/signup';
import QR from 'QR/QR';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  
  path: '/',
  element: <MinimalLayout />,
 
  children: [
    {
      path: '/',
      element: <QR />
    },
    // {
    //   path: '/register',
    //   element: <AuthRegister />
    // }
    {
      path: '/signup',
      element: <Signup />
    },
  ]
};

export default LoginRoutes;
