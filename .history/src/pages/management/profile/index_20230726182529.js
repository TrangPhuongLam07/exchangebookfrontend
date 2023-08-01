import { Avatar, Box, FormGroup, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "~/components/form/input";
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Typography variant="h5">Thông tin cá nhân</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src="https://source.unsplash.com/random"
            // onClick={handleToggle}
          />
          <FormGroup sx={{ marginBottom: 2 }}>
            <Input label="Name" name="name" control={control} type="text" />
          </FormGroup>
          <FormGroup sx={{ marginBottom: 2 }}>
            <Input label="Email" name="email" control={control} type="text" />
          </FormGroup>
        </Box>
      </form>
    </>
  );
};
export default Profile;
