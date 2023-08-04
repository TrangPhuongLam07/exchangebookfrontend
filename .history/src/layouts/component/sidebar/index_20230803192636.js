import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
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
