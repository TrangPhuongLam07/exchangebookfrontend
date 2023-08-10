import {
  Button,
  Drawer,
  List,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
  colors,
} from "@mui/material";
import size from "~/config/size";
import color from "~/config/color";

import SidebarItem from "./sidebar-item";
import SidebarItemCollapse from "./sidebar-item-collapse";
import { privateRoutes, publicRoutes } from "~/config/routes";
import useLocalStorage from "~/hooks/useLocalStorage";
import { FALSE } from "sass";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { value: auth, setLocalStorage } = useLocalStorage("profile");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/sign-in", { replace: true });
    setLocalStorage(false);
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: size.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: size.sidebar.width,
          boxSizing: "border-box",
          color: color.sidebar.color,
          backgroundColor: color.sidebar.bg,
        },
      }}
    >
      <List disablePadding>
        <Toolbar
          sx={{
            marginBottom: 2,
          }}
        >
          <Stack
            sx={{
              width: "100%",
            }}
            direction="row"
            justifyContent="center"
          >
            <Typography variant="h6">Exchangebook</Typography>
            {/* <Avatar src="/> */}
          </Stack>
        </Toolbar>
        {privateRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
        {auth && (
          <Button variant="text" sx={{ color: "#fff" }} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
