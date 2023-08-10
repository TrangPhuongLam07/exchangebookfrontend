import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import color from "~/config/color";

const SidebarItem = ({ item, onClick }) => {
  return (
    item.sidebarProps && (
      <ListItemButton
        component={Link}
        to={item?.path}
        sx={{
          "&: hover": {
            backgroundColor: color.sidebar.hoverBg,
          },
          padding: "12px 24px",
        }}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            color: color.sidebar.color,
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
