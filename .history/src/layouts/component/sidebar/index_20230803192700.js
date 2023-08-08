import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import config from "~/config";
const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: config.sizes.sidebar.width,
        flexShrink: 0,
      }}
    >
      <List disablePadding>
        <Toolbar />
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
      </List>
    </Drawer>
  );
};

export default Sidebar;