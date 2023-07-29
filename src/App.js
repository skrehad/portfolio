import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Project1 from "./Project1/Project1";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/seeProjectDetails",
      element: <Project1></Project1>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          className: "mt-12 mr-6",
          style: {
            border: "1px solid #713200",
            padding: "24px",
          },
        }}
        duration="4000"
        position="top-center"
        reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
