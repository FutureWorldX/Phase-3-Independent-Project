import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@pages/login';
import HomePage from '@pages/homepage';
import CustomerPage from '@pages/customer';
import OrderPage from '@pages/order';
import Navbar from '@pages/navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: (
      <>
        <Navbar /> 
        <HomePage />
      </>
    )
  },
  {
    path: '/customers',
    element: (
      <>
        <Navbar />
        <CustomerPage />
      </>
    )
  },
  {
    path: '/orders',
    element: (
      <>
        <Navbar />
        <OrderPage />
      </>
    )
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
