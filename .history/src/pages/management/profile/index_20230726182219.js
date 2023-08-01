import { FormGroup, Typography } from "@mui/material";
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
        <FormGroup sx={{ marginBottom: 2 }}>
          <Input label="Name" name="name" control={control} type="text" />
        </FormGroup>
      </form>
    </>
  );
};
export default Profile;
