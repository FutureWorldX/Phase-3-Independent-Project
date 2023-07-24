import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@pages/login';
import HomePage from '@pages/homepage';
import CustomerPage from '@pages/customer';
import OrderPage from '@pages/order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/customers',
    element: <CustomerPage />,
  },
  {
    path: '/orders',
    element: <OrderPage />,
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
