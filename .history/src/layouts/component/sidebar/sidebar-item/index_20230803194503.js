import { ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";

const SidebarItem = ({ item }) => {
  return (
    item.sidebarProps && (
      <ListItemButton>
        <ListItemIcon>{item?.sidebarProps.icon}</ListItemIcon>
        {item?.sidebarProps.displayText}
      </ListItemButton>
    )
  );
};

export default SidebarItem;
