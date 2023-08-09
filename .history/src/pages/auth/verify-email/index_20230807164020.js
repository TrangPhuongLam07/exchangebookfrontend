import { CheckBoxOutlined } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import theme from "~/config/theme";

const VerifyEmail = () => {
  const location = useLocation();
  const params = useParams();
  console.log(location, params);
  return (
    <></>
    // <ListItemIcon
    //   sx={{
    //     color: theme.palette.success,
    //   }}
    // >
    //   <CheckBoxOutlined />
    //   {message}
    // </ListItemIcon>
  );
};

export default VerifyEmail;
