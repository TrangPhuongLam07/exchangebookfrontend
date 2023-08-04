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

export const routes = generateRoutes(config.routes);
