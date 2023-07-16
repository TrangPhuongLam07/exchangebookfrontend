import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
const Input = ({ control, name }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
    rules: {
      required: true,
    },
  });
  console.log(field.value);
  return (
    <>
      <TextField
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field?.value}
        name={field.name}
        inputRef={field.ref}
      />
    </>
  );
};

export default Input;
