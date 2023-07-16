import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>ExchangeBook</Typography>
        <Button sx={{ marginLeft: "auto" }} color="warning">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
