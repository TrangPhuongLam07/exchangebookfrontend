import { Home, ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
  Drawer,
  ListItemButton,
  Toolbar,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import theme from "~/config/theme";
const Sidebar = () => {
  const StyledLink = styled(Link)({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "10px 20px",
    rowGap: 5,
  });

  return (
    // <Box
    //   flex={1}
    //   position="relative"
    //   p={2}
    //   sx={{
    //     display: { xs: "none", sm: "block" },
    //   }}
    // >
    //   <Box position="fixed" width={1 / 8}>
    //     <List>
    //       <ListItem>
    //         <StyledLink to="/">
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           <ListItemText primary="Home" />
    //         </StyledLink>
    //       </ListItem>
    //       <ListItem>
    //         <StyledLink to="/management">
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           <ListItemText primary="Management" />
    //         </StyledLink>
    //       </ListItem>
    //       <ListItem>
    //         <StyledLink to="/management/add">
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           <ListItemText primary="Add" />
    //         </StyledLink>
    //       </ListItem>
    //       <ListItem>
    //         <StyledLink to="/management/transaction">
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           <ListItemText primary="Transaction" />
    //         </StyledLink>
    //       </ListItem>
    //       <ListItem>
    //         <ListItemIcon>
    //           <ModeNight />
    //           <Switch />
    //         </ListItemIcon>
    //       </ListItem>
    //     </List>
    //   </Box>
    // </Box>
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          boxSizing: "border-box",
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      }}
    >
      <List disablePadding>
        <Toolbar />
        <Stack sx={{ width: "100%", justifyContent: "center" }}></Stack>

        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          Home
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          Profile
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          Management
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          Home
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
