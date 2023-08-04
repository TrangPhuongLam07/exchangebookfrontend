import {
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import config from "~/config";
import SidebarItem from "./sidebar-item";
import SidebarItemCollapse from "./sidebar-item-collapse";
const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: config.sizes.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: config.sizes.sidebar.width,
          boxSizing: "border-box",
          color: config.colors.sidebar.color,
          backgroundColor: config.colors.sidebar.bg,
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
        {config.routes.map((route, index) =>
          route.sidebarProps && route.sidebarProps.child ? (
            <SidebarItemCollapse key={index} item={route} />
          ) : (
            <SidebarItem key={index} item={route} />
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
