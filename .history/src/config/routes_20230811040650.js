import { lazy } from "react";
import { AutoStories, HomeMini, ModeEdit, PostAdd } from "@mui/icons-material";
import { ROLE } from "./const";
import { authService } from "~/services";

const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));

const ManagementPage = lazy(() => import("~/pages/management"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const HomePage = lazy(() => import("~/pages/home"));

const AddPostPage = lazy(() => import("~/pages/management/add-post"));

export const publicRoutes = [
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
export const privateRoutes = [
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
        role: ROLE.USER,
      },
      {
        path: "/management/posts/update/:id",
        element: <UpdatePostPage />,
        state: "management.posts.update",
        role: ROLE.USER,
      },
      {
        path: "/management/posts",
        element: <ManagementPage />,
        state: "management.posts",
        sidebarProps: {
          displayText: "Lịch sử tin đăng",
          icon: <PostAdd />,
        },
        role: ROLE.USER,
      },
    ],
  },
  {
    sidebarProps: {
      displayText: "Logout",
      onClick: authService.signOut,
    },
  },
];
