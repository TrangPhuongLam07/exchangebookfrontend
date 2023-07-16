import { Home, ModeNight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
const Sidebar = () => {
  return (
    <Box
      flex={1}
      position="relative"
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width={1 / 5}>
        <List>
          <ListItem disablePadding>
            <Link to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/management/add">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/management/update">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Update" />
            </Link>
          </ListItem>
          <Link to="/management/transaction">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Transaction" />
              </ListItem>
            </ListItemButton>
          </Link>
          <ListItem>
            <ListItemIcon>
              <ModeNight />
              <Switch />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
