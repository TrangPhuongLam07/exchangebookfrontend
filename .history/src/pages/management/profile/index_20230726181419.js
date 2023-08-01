import { Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Profile = () => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.number().required(),
    description: yup.string().required(),
    images: yup.array().of(yup.object()),
  });
  return (
    <>
      <Typography variant="h5">Thông tin cá nhân</Typography>
    </>
  );
};
export default Profile;
