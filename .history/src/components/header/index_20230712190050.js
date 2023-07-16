import styled from "styled-components";
import { Pets, Mail } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  InputBase,
  Badge,
} from "@mui/material";

const Header = () => {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
  }));
  const Icons = styled(Box)(({ theme }) => ({}));
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
        </Icons>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
