import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
