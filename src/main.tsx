import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{ path: "/login", element: <Login /> },
	{ path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
