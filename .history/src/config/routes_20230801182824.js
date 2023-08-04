import config from "~/config";
import { lazy } from "react";
const HomePage = lazy(() => import("~/pages/home"));
const AddPostPage = lazy(() => import("~/pages/management/add-post"));
const UpdatePostPage = lazy(() => import("~/pages/management/update-post"));
const ManagementPage = lazy(() => import("~/pages/management"));
const TransactionPage = lazy(() => import("~/pages/management/transaction"));

const ProfilePage = lazy(() => import("~/pages/management/profile"));

const DetailPage = lazy(() => import("~/pages/detail"));

const DefaultLayout = lazy(() => import("~/layouts/default"));
const ManagementLayout = lazy(() => import("~/layouts/management"));
const DetailLayout = lazy(() => import("~/layouts/detail"));

const routes = [
  {
    path: config.routes.management.management,
    element: <ManagementPage />,
    layout: ManagementLayout,
    sidebarProps: {
      displayText: "Management",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
      },
    ],
  },
  {
    path: config.routes.management.add,
    element: <AddPostPage />,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.update,
    element: <UpdatePostPage />,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.profile,
    element: <ProfilePage />,
    layout: ManagementLayout,
  },
  {
    path: config.routes.management.transaction,
    element: <TransactionPage />,
    layout: ManagementLayout,
  },
];

export default routes;
