import { lazy } from "react";
import { AutoStories, PlusOneOutlined } from "@mui/icons-material";
const DefaultLayout = lazy(() => import("~/layouts/default"));
const ManagementPage = lazy(() => import("~/pages/management"));
const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));
const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const routes = [
  { path: "/sign-in", element: <SignInPage />, state: "sign-in", layout: null },
  { path: "/sign-up", element: <SignUpPage />, state: "sign-in", layout: null },
  { path: "/", element: <HomePage />, state: "home", layout: DefaultLayout },
  {
    path: "/management",
    element: <ManagementPage />,
    state: "management",
    sidebarProps: {
      displayText: "Tin đăng của bạn",
      icon: <AutoStories />,
    },
    child: [
      {
        path: "/management/posts/add",
        element: <AddPostPage />,
        state: "management.posts.add",
        sidebarProps: {
          displayText: "Tạo tin đăng",
          icon: <PlusOneOutlined />,
        },
      },
      {
        path: "/management/posts/update",
        element: <UpdatePostPage />,
        state: "management.posts.update",
        sidebarProps: {
          displayText: "Tạo tin đăng",
          icon: <PlusOneOutlined />,
        },
      },
    ],
  },
];

export default routes;
