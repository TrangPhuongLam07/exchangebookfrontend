import { Select, FormHelperText } from "@mui/material";
import { useEffect } from "react";
import { useController } from "react-hook-form";

export const MySelect = ({ name, control, children, onChange }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });
  useEffect(() => {
    onChange();
  }, [field.onChange]);

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
