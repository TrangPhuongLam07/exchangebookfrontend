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
} from "@mui/material";

const Header = () => {
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
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
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
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://source.unsplash.com/random"
          />
        </UserBox>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
