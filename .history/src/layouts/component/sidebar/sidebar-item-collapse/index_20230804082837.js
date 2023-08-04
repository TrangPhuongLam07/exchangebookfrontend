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
        }}
      ></ListItemButton>
    )
  );
};

export default SidebarItemCollapse;
