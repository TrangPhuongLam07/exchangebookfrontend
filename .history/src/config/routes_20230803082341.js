import { AutoStories, PostAdd } from "@mui/icons-material";
import { lazy } from "react";
const HomePage = lazy(() => import("~/pages/home"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
);

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
      element: <PostAdd />,
      state: "management.posts.add",
      sidebarProps: {
        displayText: "Tạo tin đăng",
      },
    },
  },
];

export default routes;
