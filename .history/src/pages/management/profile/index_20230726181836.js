import { Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const Profile = () => {
  const schema = yup.object().shape({
    avatar: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
  });
  // mockup default values
  const defaultValues = {
    avatar: "",
    name: "this is name",
    email: "this is email",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  return (
    <>
      <Typography variant="h5">Thông tin cá nhân</Typography>
    </>
  );
};
export default Profile;
