import { lazy } from "react";
import { AutoStories, HomeMini, ModeEdit, PostAdd } from "@mui/icons-material";
import { ROLE } from "./const";

const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const SignUpPage = lazy(() => import("~/pages/auth/sign-up"));
const SignInPage = lazy(() => import("~/pages/auth/sign-in"));
const ManagementPage = lazy(() => import("~/pages/management"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));

const publicRoutes = [
  { path: "/sign-in", element: <SignInPage />, state: "sign-in", layout: null },
  { path: "/sign-up", element: <SignUpPage />, state: "sign-in", layout: null },
  { path: "/", element: <HomePage />, state: "home" },
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Trang chủ",
      icon: <HomeMini />,
    },
  },
];
const privateRoutes = [
  { path: "/error/403" },
  { path: "/error/401" },
  { path: "/error/404" },
  {
    path: "/management",
    element: <ManagementLayout />,
    state: "management",
    sidebarProps: {
      displayText: "Tin đăng của bạn",
      icon: <AutoStories />,
    },
    role: ROLE.USER,
    child: [
      {
        path: "/management/posts/add",
        element: <AddPostPage />,
        state: "management.posts.add",
        sidebarProps: {
          displayText: "Tạo tin đăng",
          icon: <PostAdd />,
        },
      },
      {
        path: "/management/posts/update",
        element: <UpdatePostPage />,
        state: "management.posts.update",
        sidebarProps: {
          displayText: "Cập nhật tin đăng",
          icon: <ModeEdit />,
        },
      },
      {
        path: "/management/posts",
        element: <ManagementPage />,
        state: "management.posts",
        sidebarProps: {
          displayText: "Lịch sử tin đăng",
          icon: <PostAdd />,
        },
      },
    ],
  },
];
export default { publicRoutes, privateRoutes };
