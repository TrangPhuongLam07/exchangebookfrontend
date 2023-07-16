import styled from "styled-components";
import { Pets } from "@mui/icons-material";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Header = () => {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ them }) => ({
    background: "whitee",
  }));
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
              display: { xx: "block", sm: "none" },
            }}
          />
        </Toolbar>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
