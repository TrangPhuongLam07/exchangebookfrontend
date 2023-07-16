import { Select, FormHelperText } from "@mui/material";
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
    <>
      <Select
        {...props}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        error={!!errors?.[name]}
      >
        {children}
      </Select>
      <FormHelperText>{errors?.[name]?.message}</FormHelperText>
    </>
  );
};
