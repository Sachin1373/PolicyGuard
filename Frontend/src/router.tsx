import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { SignUp } from "./pages/SignUp";
import App from "./App";
import { AuthLayouts } from "./layouts/AuthLayouts";
import { LandingPage } from "./pages/LandingPage";

export const publicRoutes = [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/landing',
      element: <LandingPage />,
    },
    {
        element: <AuthLayouts />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <SignUp />,
          },
        ],
      },
  ];

// export const privateRoutes = [
//     {
//       path: '/dashboard',
//       element: <Dashboard />,
//     }
//   ];

export const fallbackRoute = [
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

const router = createBrowserRouter([
    ...publicRoutes,
    ...fallbackRoute,
]);

export default router;