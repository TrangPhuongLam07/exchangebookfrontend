import styled from "styled-components";
import { Badge, Pets, Mail } from "@mui/icons-material";
import { AppBar, Typography, Box, Toolbar, InputBase } from "@mui/material";

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
        <Toolbar>
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
            <Badge color="primary">
              <Mail color="action" />
            </Badge>
          </Icons>
        </Toolbar>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
