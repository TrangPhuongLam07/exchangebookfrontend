import { lazy } from "react";
import { AutoStories } from "@mui/icons-material";
const ManagementPage = lazy(() => import("~/pages/management"));
const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const routes = [
  { path: "/sign-in", element: <SignInPage />, state: "sign-in" },
  { path: "/sign-up", element: <SignUpPage />, state: "sign-in" },
  { path: "/", element: <HomePage />, state: "home" },
  {
    path: "/management",
    element: <ManagementPage />,
    state: "management",
    sidebarProps: {
      displayText: "Quản lý tin đăng",
      icon: <AutoStories />,
    },
    child: [
      {
        path: "/management/posts/add",
        element: <AddPostPage />,
        state: "management.posts.add",
        sidebarProps: {
          displayText: "Tạo tin đăng",
        },
      },
    ],
  },
];

export default routes;
