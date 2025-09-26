import { createBrowserRouter } from "react-router-dom";
import  Login  from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import  SignUp  from "./pages/SignUp";
import App from "./App";
import { AuthLayouts } from "./layouts/AuthLayouts";
import { LandingPage } from "./pages/LandingPage";
import { ProtectedRoute } from "./protectedRoutes";
import Dashboard from "./pages/Dashboard";

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

export const privateRoutes = [
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    }
  ];

export const fallbackRoute = [
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

const router = createBrowserRouter([
    ...publicRoutes,
    ...privateRoutes,
    ...fallbackRoute,
]);

export default router;