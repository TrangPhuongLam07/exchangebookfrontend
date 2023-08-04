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
import config from "~/config";
import SidebarItem from "../sidebar-item";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      item?.sidebarProps && (
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
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item?.child.map((route, index) =>
            route.sidebarProps && route.child ? (
              <SidebarItemCollapse key={index} item={route} />
            ) : (
              <SidebarItem key={index} item={route} />
            )
          )}
        </List>
      </Collapse>
      )
    </>
  );
};

export default SidebarItemCollapse;
