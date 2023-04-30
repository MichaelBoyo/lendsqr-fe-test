import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserDetails from "./pages/userDetails/userDetals";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    children: [
      { path: "", element: <Dashboard /> },
      { path: "user/:id", element: <UserDetails /> },
    ],
  },
];
