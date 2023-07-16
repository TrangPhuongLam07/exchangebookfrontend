import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

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
          <MenuIcon />
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
