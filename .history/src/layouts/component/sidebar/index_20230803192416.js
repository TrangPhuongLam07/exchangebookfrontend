import { Avatar, Drawer, List, Stack, Typography } from "@mui/material";
const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List disablePadding>
        <Toolbar />
        <Stack>
          <Typography variant="h3">Exchangebook</Typography>
          {/* <Avatar src="/> */}
        </Stack>
      </List>
    </Drawer>
  );
};

export default Sidebar;
