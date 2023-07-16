import { Select } from "@mui/material";
import { useController } from "react-hook-form";

export const MySelect = ({ name, control, children, onChange, ...props }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });
  return (
    <Select
      onChange={field.onChange}
      value={field.value}
      name={field.name}
      error={!!errors?.[name]}
    >
      {children}
    </Select>
  );
};
