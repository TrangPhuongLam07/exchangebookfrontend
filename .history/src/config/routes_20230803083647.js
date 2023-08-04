import { AutoStories } from "@mui/icons-material";
import { lazy } from "react";
import ManagementLayout from "~/layouts/management";
import HomePage from "~/pages/home";
import AddPostPage from "~/pages/management/add-post";
// const HomePage = lazy(() => import("~/pages/home"));
// const ManagementLayout = lazy(() => import("~/layouts/management"));

const routes = [
  { path: "/", element: <HomePage />, state: "home" },
  {
    path: "/management",
    element: <ManagementLayout />,
    state: "management",
    sidebarProps: {
      displayText: "Quản lý tin đăng",
      icon: <AutoStories />,
    },
    child: {
      path: "/management/posts/add",
      element: <AddPostPage />,
      state: "management.posts.add",
      sidebarProps: {
        displayText: "Tạo tin đăng",
      },
    },
  },
];

export default routes;
