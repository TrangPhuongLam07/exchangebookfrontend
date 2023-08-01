import { Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Profile = () => {
  const schema = yup.object().shape({
    avatar: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
  });
  return (
    <>
      <Typography variant="h5">Thông tin cá nhân</Typography>
    </>
  );
};
export default Profile;
