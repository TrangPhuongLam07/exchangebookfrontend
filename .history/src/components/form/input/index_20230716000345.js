import {} from "@mui/material";
const Input = ({ label, name }) => {
  return (
    <>
      <TextField label={(label, name)} />
    </>
  );
};

export default Input;
