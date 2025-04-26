import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/exo-2/100.css";
import "@fontsource/exo-2/200.css";
import "@fontsource/exo-2/300.css";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";
import "@fontsource/exo-2/800.css";
import "@fontsource/exo-2/900.css";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
);
