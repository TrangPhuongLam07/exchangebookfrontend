import { useState } from "react";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    item.sidebarProps && (
      <ListItemButton onClick={() => setOpen((prev) => !prev)}></ListItemButton>
    )
  );
};

export default SidebarItemCollapse;
