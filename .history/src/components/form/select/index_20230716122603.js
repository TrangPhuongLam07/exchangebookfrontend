import { Select, FormHelperText } from "@mui/material";
import { useController } from "react-hook-form";

export const MySelect = ({ name, control, children, onSelect }) => {
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
      <FormHelperText sx={{ color: "#d32f2f" }}>
        {errors?.[name]?.message}
      </FormHelperText>
    </>
  );
};
