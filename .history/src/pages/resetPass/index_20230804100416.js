import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { authService } from "~/utils/services";

const defaultTheme = createTheme();

export default function ResetPassPage() {
  const query = useQueryClient();
  const myStyles = {
    color: "red",
  };
  //validation form with yup
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6)
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Confirm password is not match password"
      )
      .required(),
  });
  //Giá trị ban đầu của sign up
  const defaultValues = {
    confirmPassword: "",
  };

  //Caấu hình useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });
  //Xử lý sign up
  const onSubmit = async (data) => {
    console.log(data);
    const loginRequest = {
      password: data.email,
      confirmPassword: data.password,
    };

    handleResetPass.mutate(loginRequest);
  };

  //Gọi api register để sign up
  const handleResetPass = useMutation(
    async (data) => authService.resetPass(data),
    {
      onSuccess: (data) => {
        toast.success("Đăng Nhập thành công");
        reset(defaultValues);
        query.invalidateQueries({ queryKey: ["auth"] });
      },
      onError: (error) => {
        console.log("Mutation failed", error);
        toast.error("Đăng nhâp không thành công");
      },
    }
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 3 }}>
              <div>
                <TextField
                  name="password"
                  label="Password*"
                  type="password"
                  id="password"
                  fullWidth
                  {...register("password")}
                />
              </div>
              <div>
                {errors.password ? (
                  <span style={myStyles}>{errors.password.message}</span>
                ) : (
                  <span style={{ color: "gray" }}>
                    At least 6 letters (number, lowercase letter, uppercase
                    letter, special character){" "}
                  </span>
                )}
              </div>
              <div>
                <TextField
                  name="confirm-password"
                  label="Confirm Password*"
                  type="password"
                  id="confirm-password"
                  fullWidth
                  {...register("confirmPassword")}
                />
              </div>
              <div>
                {errors.confirmPassword ? (
                  <span style={myStyles}>{errors.confirmPassword.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Change password
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
