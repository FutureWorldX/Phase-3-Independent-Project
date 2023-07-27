import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@pages/login';
import HomePage from '@pages/homepage';
import SpaceForm from '@pages/homepage/input';
import CustomerPage from '@pages/customer';
import CustomerForm from '@pages/customer/input';
import OrderPage from '@pages/order';
import OrderForm from '@pages/order/input';
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
    // Add a new route for the shelf space form page
    path: '/spaceform',
    element: (
      <>
        <Navbar />
        <SpaceForm />
      </>
    ),
  },
  {
    path: '/customers',
    element: (
      <>
        <Navbar />
        <CustomerPage />
      </>
    ),
    // Adding nested routes inside the /customers path
    children: [
      {
        path: 'add',
        element: (
          <>
            <Navbar />
            <CustomerForm />
          </>
        ),
      },
    ],
  },
  {
    // Add a new route for the customer form page
    path: '/customerform',
    element: (
      <>
        <Navbar />
        <CustomerForm />
      </>
    ),
  },
  {
    path: '/orders',
    element: (
      <>
        <Navbar />
        <OrderPage />
      </>
    )
  },
  {
    // Add a new route for the order form page
    path: '/orderform',
    element: (
      <>
        <Navbar />
        <OrderForm />
      </>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
