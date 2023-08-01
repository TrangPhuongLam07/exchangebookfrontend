import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
const Input = ({ control, name }) => {
  const { field } = useController({
    control,
    name,
    rules: {
      required: true,
      min: 1,
    },
  });
  return (
    <TextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};

export default Input;