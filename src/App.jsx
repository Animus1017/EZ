import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="w-screen h-screen overflow-x-hidden box-border font-exo2 flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
