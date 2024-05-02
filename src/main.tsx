import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./shared/store/store.ts";
import { Home, UserPage } from "./pages/index.ts";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    {
      path: "/users/",
      element: <App />,
      children: [
        {
          path: "/users/",
          element: <Home />,
        },
        {
          path: "/users/:userId/",
          element: <UserPage />,
        },
      ],
    },
  ]);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
