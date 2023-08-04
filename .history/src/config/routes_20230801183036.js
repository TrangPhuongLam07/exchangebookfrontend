import config from "~/config";
import { lazy } from "react";
const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const TransactionPage = lazy(() => import("~/pages/management/transaction"));
const ProfilePage = lazy(() => import("~/pages/management/profile"));
const ManagementPage = lazy(() => import("~/pages/management"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));

const routes = [
  {
    path: "/dashboard",
    element: <ManagementPage />,
    layout: ManagementLayout,
    sidebarProps: {
      displayText: "Dasboard",
      // icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
      },
    ],
  },
  {
    path: "/add",
    element: <AddPostPage />,
    layout: ManagementLayout,
  },
  {
    path: "/update",
    element: <UpdatePostPage />,
    layout: ManagementLayout,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    layout: ManagementLayout,
  },
  {
    path: "transaction",
    element: <TransactionPage />,
    layout: ManagementLayout,
  },
];

export default routes;
