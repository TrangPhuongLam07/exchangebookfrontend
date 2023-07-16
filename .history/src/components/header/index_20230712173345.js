import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
