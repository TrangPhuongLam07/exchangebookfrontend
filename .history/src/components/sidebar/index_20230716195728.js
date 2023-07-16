import { Home, ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const StyledLink = styled(Link)({
    display: "flex",
    rowGap: 5,
  });

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
            <            <StyledLink to="/management/update">
  to="/">
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
            <StyledLink to="/management/update">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Update" />
            </StyledLink>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/management/transaction">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Transaction" />
            </Link>
          </ListItem>
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
