import { Fragment, lazy } from "react";
import { Route } from "react-router-dom";
import config from "~/config";
const DefaultLayout = lazy(() => import("~/layouts/default"));
const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

const generateRoutes = (routes) => {
  console.log(1);
  return routes?.map((route, index) => {
    console.log(2);
    let Layout;
    console.log(3);
    switch (route.layout) {
      case "undefined":
        console.log(222);
        Layout = DefaultLayout;
        break;
      case null:
        Layout = Fragment;
        break;
      default:
        Layout = route?.layout;
        break;
    }
    console.log(4);
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <PageWrapper state={route.state}>
            <Layout>{route.element}</Layout>
          </PageWrapper>
        }
      >
        {route.child && generateRoutes(route.child)}
      </Route>
    );
  });
};
export const routes = generateRoutes(config.routes);
