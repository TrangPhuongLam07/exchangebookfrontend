import { CheckCircleRounded } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import theme from "~/config/theme";
import { authService } from "~/services";

const VerifyEmail = () => {
  const { state } = useLocation();
  const { message } = state;

  const verifyEmailMutation = useMutation(authService.verifyEmail());

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
