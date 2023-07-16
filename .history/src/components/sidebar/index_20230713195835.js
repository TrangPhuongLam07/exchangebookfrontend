import { Link } from "react-router-dom";
import { Home, ModeNight } from "@mui/icons-material";
import {
} from "@mui/material";
  Switch,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Box,
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
          <Link to="/management/add">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItem>
            </ListItemButton>
          </Link>
          <Link to="/management/update">
            <ListItemButton>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItem>
            </ListItemButton>
          </Link>
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
