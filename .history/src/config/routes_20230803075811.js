import { AutoStories, PostAdd } from "@mui/icons-material";
import { lazy } from "react";
const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const TransactionPage = lazy(() => import("~/pages/management/transaction"));
const ProfilePage = lazy(() => import("~/pages/management/profile"));
const HomePage = lazy(() => import("~/pages/home"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));

const routes = [
  { index: true, element: <HomePage />, state: "home" },
  {
    path: "/management",
    element: <ManagementLayout />,
    state: "management",
    sidebarProps: {
      displayText: "Quản lý bài viết",
      icon: <AutoStories />,
    },
    child: {
      path:'/management/posts/add',
      element: <PostAdd/>,

    }
  },
];

export default routes;
