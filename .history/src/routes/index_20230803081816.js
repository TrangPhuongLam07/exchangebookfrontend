import { Route } from "react-router-dom";
import config from "~/config";
import PageWrapper from "~/layouts/page-wrapper";
const generateRoutes = () =>
  config.routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
    >
      {route.child && generateRoutes(route.child)}
    </Route>
  ));
export const routes = generateRoutes();
