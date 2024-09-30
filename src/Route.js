import React from "react";
const Home = React.lazy(() => import("./Hello"));
const Product = React.lazy(() => import("./Product"));
const Register = React.lazy(() => import ("./Registrasi"));

const routes = [
    { path: "/", Component: Home},
    { path: "/Product", Component: Product},
    { path: "/Register", Component: Register},
];

export default routes;