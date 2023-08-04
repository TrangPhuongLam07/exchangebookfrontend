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
    <Drawer variant="permanent">
      <List disablePadding>
        <Toolbar />
        <Stack
          sx={{
            width: "100%",
          }}
          direction="row"
        >
          <Typography variant="h6">Exchangebook</Typography>
          {/* <Avatar src="/> */}
        </Stack>
      </List>
    </Drawer>
  );
};

export default Sidebar;
