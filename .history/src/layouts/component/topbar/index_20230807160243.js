import { AppBar, Toolbar, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${size.sidebar.width})`,
        ml: size.sidebar.width,
        boxShadow: "unset",
        backgroundColor: color.topbar.bg,
        color: color.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h5">Exchange book</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
