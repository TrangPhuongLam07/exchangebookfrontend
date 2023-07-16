import { Home, ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width={1 / 5}>
        <List>
          <Link to="/">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </ListItemButton>
          </Link>
          <Link to="/book/add">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItem>
            </ListItemButton>
          </Link>
          <Link to="/book/transaction">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </ListItemButton>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
