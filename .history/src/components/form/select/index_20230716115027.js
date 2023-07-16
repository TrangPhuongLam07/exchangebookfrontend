import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export const MySelect = ({ name, control, children, ...props }) => {
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
      error={!!errors?.[name]}
      helperText={errors?.[name]?.message}
      type="select"
    >
      {children}
    </TextField>
    // <Select
    //   onChange={field.onChange}
    //   value={field.value}
    //   name={field.name}
    //   error={!!errors?.[name]}
    // >
    //   {children}
    // </Select>
  );
};
