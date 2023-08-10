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
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authService } from "~/services";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
const ForgotPasswordPage = () => {
  const naviagte = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const defaultValues = {
    email: "",
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    mode: "all",
  });
  const onSubmit = (data) => {
    forgotPasswordMutation.mutate(data);
  };
  const forgotPasswordMutation = useMutation(
    async () => authService.forgotPassword(),
    {
      onSuccess: (data) => {
        toast.success(data.message);
        naviagte("/sign-in", { replace: true });
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );
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
          Forgot Password
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Gửi yêu cầu
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Already have an account?
                <Link href="/sign-in" variant="body2">
                  Sign In
                </Link>
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

export default ForgotPasswordPage;