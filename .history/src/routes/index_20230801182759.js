// const publicRoutes = [
//   {
//     path: config.routes.home,
//     element: <HomePage />,
//     layout: DefaultLayout,
//     state: "home",
//   },
//   {
//     path: config.routes.detailPage,
//     element: <DetailPage />,
//     layout: ManagementLayout,
//   },
// ];
// const privateRoutes = [
//   {
//     path: config.routes.management.management,
//     element: <ManagementPage />,
//     layout: ManagementLayout,
//     sidebarProps: {
//       displayText: "Management",
//       icon: <DashboardOutlinedIcon />,
//     },
//     child: [
//       {
//         index: true,
//       },
//     ],
//   },
//   {
//     path: config.routes.management.add,
//     element: <AddPostPage />,
//     layout: ManagementLayout,
//   },
//   {
//     path: config.routes.management.update,
//     element: <UpdatePostPage />,
//     layout: ManagementLayout,
//   },
//   {
//     path: config.routes.management.profile,
//     element: <ProfilePage />,
//     layout: ManagementLayout,
//   },
//   {
//     path: config.routes.management.transaction,
//     element: <TransactionPage />,
//     layout: ManagementLayout,
//   },
// ];
import { Fragment } from "react";
import { Route } from "react-router-dom";
import config from "~/config";
const generateRoutes = (routes) => {
  return routes.map((route, index) => {
    const Layout = route.layout ?? Fragment;
    <Route path={route.path} element={<Layout>{route.element}</Layout>}>
      {route.child && generateRoutes(route.child)}
    </Route>;
  });
};

export const routes = generateRoutes(config.route);
