import { ListItemIcon } from "@mui/material";
import { useState } from "react";
import config from "~/config";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    item.sidebarProps && (
      <ListItemButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          "&: hover": {
            backgroundColor: config.colors.sidebar.hoverBg,
          },
          padding: "12px 24px",
        }}
      >
        <ListItemIcon>{item?.sidebarProps.icon}</ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    )
  );
};

export default SidebarItemCollapse;
