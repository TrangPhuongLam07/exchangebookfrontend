import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import { authService } from "~/services";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignInPage() {
  const query = useQueryClient();
  //validation form with yup
  const schema = yup.object().shape({
    email: yup
      .string("Email is a string")
      .email("Please provide a valid email address")
      .required("Please enter your email address"),
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
  });
  const myStyles = {
    color: "red",
  };
  //Giá trị ban đầu của sign up
  const defaultValues = {
    email: "",
    password: "",
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
      email: data.email,
      password: data.password,
    };

    handleLogin.mutate(loginRequest);
  };

  //Gọi api register để sign up
  const handleLogin = useMutation(async (data) => authService.login(data), {
    onSuccess: (data) => {
      toast.success("Đăng Nhập thành công");
      reset(defaultValues);
      query.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.log("Mutation failed", error);
      toast.error("Đăng nhâp không thành công");
    },
  });
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
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 1 }}>
              <div>
                <TextField
                  margin="normal"
                  id="email"
                  label="Email Address*"
                  name="email"
                  type="text"
                  {...register("email")}
                />
              </div>
              <div>
                {errors.email ? (
                  <span style={myStyles}>{errors.email.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <TextField
                  margin="normal"
                  name="password"
                  label="Password*"
                  type="password"
                  id="password"
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

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={"/forgot-pass"} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/sign-up"} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
