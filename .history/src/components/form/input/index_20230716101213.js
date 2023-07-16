import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
const Input = ({ control, name, ...props }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });
  console.log(errors);
  return (
    <TextField
      {...props}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      // helperText={errors}
    />
  );
};

export default Input;
