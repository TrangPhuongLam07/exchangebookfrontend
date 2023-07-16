import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>ExchangeBook</Typography>
        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          color="secondary"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
