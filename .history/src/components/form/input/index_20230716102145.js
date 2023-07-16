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
  return (
    <TextField
      {...props}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      error={errors?.[name]}
      helperText={errors?.[name]?.message}
    />
  );
};

export default Input;
