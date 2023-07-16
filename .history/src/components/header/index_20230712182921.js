import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>ExchangeBook</Typography>
        <Button variant="contained" sx={{ marginLeft: "auto" }} color="info">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
