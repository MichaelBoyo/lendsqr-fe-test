import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
