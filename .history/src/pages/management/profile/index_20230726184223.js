import { Avatar, Box, Button, FormGroup, Typography } from "@mui/material";
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
    email: "email@gmail.com",
  };
  const {
    control,
    register,
    watch,
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
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              padding: "40px",
            }}
          >
            <>
              {" "}
              <input
                type="file"
                value={watch("avatar")}
                {...register("avatar")}
                hidden
              />
              <Avatar
                sx={{ width: 100, height: 100 }}
                src="https://source.unsplash.com/random"
              />
            </>
          </Box>
          <Box>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Input label="Name" name="name" control={control} type="text" />
            </FormGroup>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Input label="Email" name="email" control={control} type="text" />
            </FormGroup>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Button variant="outlined" type="submit">
                Lưu lại
              </Button>
            </FormGroup>
          </Box>
        </Box>
      </form>
    </>
  );
};
export default Profile;
