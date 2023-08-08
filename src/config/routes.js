import { lazy } from "react";
import { AutoStories, HomeMini, ModeEdit, PostAdd } from "@mui/icons-material";
import { ROLE } from "./const";

const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
<<<<<<< HEAD

const ManagementPage = lazy(() => import("~/pages/management"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const HomePage = lazy(() => import("~/pages/home"));

const AddPostPage = lazy(() => import("~/pages/management/add-post"));

export const publicRoutes = [
=======
const SignInPage = lazy(() => import("~/pages/signIn"));
const SignUpPage = lazy(() => import("~/pages/signUp"));
const DetailPage = lazy(() => import("~/pages/detail"));
const ForgotPassPage = lazy(() => import("~/pages/forgotPass"));
const VerifyEmailPage = lazy(() => import("~/pages/verifyEmail"));
const routes = [
  { path: "/sign-in", element: <SignInPage />, state: "sign-in", layout: null },
  { path: "/sign-up", element: <SignUpPage />, state: "sign-up", layout: null },
  { path: "/detail-page", element: <DetailPage />, state: "detail-page", layout: null },
  { path: "/forgot-pass", element: <VerifyEmailPage />, state: "forgot-pass", layout: null },
  { path: "/forgot-pass/:email", element: <ForgotPassPage />, state: "forgot-pass", layout: null },
  { path: "/", element: <HomePage />, state: "home" },
>>>>>>> 59e2452f0dfa710d6a77e4575b70052e2f42465d
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
        path: "/management/posts/update",
        element: <UpdatePostPage />,
        state: "management.posts.update",
        sidebarProps: {
          displayText: "Cập nhật tin đăng",
          icon: <ModeEdit />,
        },
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
];
