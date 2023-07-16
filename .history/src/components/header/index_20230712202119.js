import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  InputBase,
  Badge,
  styled,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          ExchangeBook
        </Typography>
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://source.unsplash.com/random"
            onClick={handleToggle}
          />
        </Icons>
        <UserBox onClick={handleToggle}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://source.unsplash.com/random"
          />
        </UserBox>
        <Menu
          id="menu"
          aria-aria-labelledby="demo"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
