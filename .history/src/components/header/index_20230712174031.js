import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const handleToggleMobileView = () => {
    setMobileView(!mobileView);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          onClick={handleToggleMobileView}
          aria-label="Menu"
          color="inherit"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h5" color="inherit">
          My App
        </Typography>
      </Toolbar>
      {mobileView && (
        <Typography variant="subtitle1" color="inherit">
          This is the desktop header
        </Typography>
      )}
    </AppBar>
  );
};

export default Header;
