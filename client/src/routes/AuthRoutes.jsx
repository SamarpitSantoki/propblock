import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

//making an array of routes to be mapped in routes/index.jsx file
//all routes here will be add to our app automatically

export const authRoutes = [
  { path: "login", component: <Login /> },
  { path: "register", component: <Register /> },
];
