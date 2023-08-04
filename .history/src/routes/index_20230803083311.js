import { lazy } from "react";
import { Route } from "react-router-dom";
import config from "~/config";
const PageWrapper = lazy(() => import("~/layouts/page-wrapper"));

const generateRoutes = (routes) =>
  routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
    >
      {route.child ? console.log(123) : console.log(345);}
    </Route>
  ));
export const routes = generateRoutes(config.routes);
