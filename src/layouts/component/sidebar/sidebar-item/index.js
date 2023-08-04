import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import config from "~/config";

const SidebarItem = ({ item }) => {
  return (
    item.sidebarProps && (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: config.colors.sidebar.hoverBg,
          },
          padding: "12px 24px",
        }}
      >
        <ListItemIcon
          sx={{
            color: config.colors.sidebar.color,
          }}
        >
          {item?.sidebarProps.icon}
        </ListItemIcon>
        {item?.sidebarProps.displayText}
      </ListItemButton>
    )
  );
};

export default SidebarItem;
