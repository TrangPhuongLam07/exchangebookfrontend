import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authService } from "~/services";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAuth } from "~/contexts/auth";
const SignInPage = () => {
  const naviagte = useNavigate();
  const { state } = useLocation();
  const { setAuth } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const defaultValues = {
    email: "",
    password: "",
  };
  const from = state?.from.pathname;

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    mode: "all",
  });
  const onSubmit = (data) => {
    signInMutation.mutate(data);
  };
  const signInMutation = useMutation(async (data) => authService.signIn(data), {
    onSuccess: (data) => {
      toast.success(data.message);
      naviagte(`${from || "/"}`);
      setAuth(true);
      authService.getProfile();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              Don't have an account?
              <Link href="/sign-up" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignInPage;
