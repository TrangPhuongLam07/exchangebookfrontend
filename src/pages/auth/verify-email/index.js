import { CheckCircleRounded } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useLocation } from "react-router-dom";
import theme from "~/config/theme";

const VerifyEmail = () => {
  const { state } = useLocation();
  const { message } = state;

  return (
    <ListItemIcon
      sx={{
        color: theme.palette.primary,
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <CheckCircleRounded />
      {message}
    </ListItemIcon>
  );
};

export default VerifyEmail;
