import { AppBar } from "@mui/material";
import React from "react";
import config from "~/config";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${config.sizes.sidebar.width})`,
      }}
    ></AppBar>
  );
};

export default Topbar;
