import styled from "styled-components";
import { Pets } from "@mui/icons-material";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Header = () => {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="static">
      <StyledToobar>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { sx: "none", sm: "block" },
            }}
          >
            ExchangeBook
          </Typography>
          <Pets />
        </Toolbar>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
