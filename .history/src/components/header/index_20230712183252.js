import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import styled from "styled-components";

const Header = () => {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="static">
      <StyledToobar>
        <Toolbar>
          <Typography variant="h6">ExchangeBook</Typography>
        </Toolbar>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
