import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GlobalProvider>
  </React.StrictMode>
);
