import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText prima></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
