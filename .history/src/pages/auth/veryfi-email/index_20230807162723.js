import theme from "~/config/theme";

const VerifyEmail = (statusCode, message) => {
  if (statusCode === 200)
    return (
      <ListItemIcon
        sx={{
          color: theme.palette.success,
        }}
      >
        {message}
      </ListItemIcon>
    );
  else
    return (
      <ListItemIcon
        sx={{
          color: theme.palette.error,
        }}
      >
        {message}
      </ListItemIcon>
    );
};

export default VerifyEmail;
