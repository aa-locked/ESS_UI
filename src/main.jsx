import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom"; 
import store from "./app/store.js";
import router from "./router/routes.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  </StrictMode>
);
