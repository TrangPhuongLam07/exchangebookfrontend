import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import config from "~/config";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${config.sizes.sidebar.width})`,
        ml: config.sizes.sidebar.width,
        boxShadow: "unset",
        backgroundColor: config.colors.topbar.bg,
        color: config.colors.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h5">Exchange book</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
