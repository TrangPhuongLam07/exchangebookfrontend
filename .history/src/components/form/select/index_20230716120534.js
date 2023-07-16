import { Select, FormHelperText } from "@mui/material";
import { useController } from "react-hook-form";

export const MySelect = ({ name, control, children }) => {
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
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        error={!!errors?.[name]}
      >
        {children}
      </Select>
      <FormHelperText sx={{ color: "red" }}>
        {errors?.[name]?.message}
      </FormHelperText>
    </>
  );
};
