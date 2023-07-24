import { Home, ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const StyledLink = styled(Link)({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "10px 20px",
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
          <ListItem>
            <StyledLink to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/management/management">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Management" />
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/management/add">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </StyledLink>
          </ListItem>

          <ListItem>
            <StyledLink to="/management/transaction">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Transaction" />
            </StyledLink>
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
