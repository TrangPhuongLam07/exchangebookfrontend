import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { authService, userService } from "~/services";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

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
    signUpMutation.mutate(data);
  };
  const signUpMutation = useMutation(async (data) => authService.signUp(data), {
    onSuccess: (data) => {
      authService.signUp(data);
      toast.success(data.message);
      reset(defaultValues);
    },
    onError: (error) => toast.error(error.message),
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={!!errors?.firstName?.message}
                helperText={errors?.firstName?.message}
                {...register("firstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                {...register("lastName")}
                error={!!errors?.lastName?.message}
                helperText={errors?.lastName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email")}
                error={!!errors?.email?.message}
                helperText={errors?.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password")}
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Dont have an account?
              <Link href="#" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUpPage;
