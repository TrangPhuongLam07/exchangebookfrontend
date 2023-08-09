import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SidebarItem from "../sidebar-item";
import color from "~/config/color";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItemButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          "&: hover": {
            backgroundColor: color.sidebar.hoverBg,
          },
          padding: "12px 24px",
        }}
      >
        <ListItemIcon
          sx={{
            color: color.sidebar.color,
          }}
        >
          {item?.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarItemCollapse;
