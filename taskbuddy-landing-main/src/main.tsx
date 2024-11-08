import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      toastOptions={{
        duration: 1000,
      }}
      position="top-center"
      containerClassName="text-3xl font-semibold"
    />
  </StrictMode>
);
