import { Select } from "@mui/material";
import { useController } from "react-hook-form";

export const Select = ({ name, control, children, ...props }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
  });
  return <Select>{children}</Select>;
};
