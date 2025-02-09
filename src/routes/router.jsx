import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ProjectDetail from "../pages/ProjectDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/project-detail/:id",
        element:<ProjectDetail></ProjectDetail>
      }
    ]
  },
]);
