import { CheckBoxOutlined } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useLocation } from "react-router-dom";
import theme from "~/config/theme";

const VerifyEmail = () => {
  const { state } = useLocation();
  const { message } = state;

  return (
    <ListItemIcon
      sx={{
        color: theme.palette.success,
      }}
    >
      <CheckBoxOutlined />
      {message}
    </ListItemIcon>
  );
};

export default VerifyEmail;