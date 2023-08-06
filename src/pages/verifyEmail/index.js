import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {authService} from "~/services";
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function VerifyEmailPage() {
  const query = useQueryClient();
  const navigate = useNavigate();
  //validation form with yup
  const schema = yup.object().shape({
    email: yup.string("Email is a string")
        .email("Please provide a valid email address")
        .required("Please enter your email address"),
  });
//Giá trị ban đầu của sign up
  const defaultValues = {
    email: "",
  };

  //Caấu hình useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });
//Xử lý verify email
  const onSubmit = async (data) => {
    console.log(data)
    const verifyEmailRequest = {
      email: data.email,
    };

    handleVerifyEmail.mutate(verifyEmailRequest);
    navigate(`/password-reset/${data.email}`)
  };

  //Gọi api register để sign up
  const handleVerifyEmail = useMutation(
      {
        mutationFn: (data) => authService.verifyEmail(data),
        onSuccess: () => {
          toast.success("Gửi thành công");
          reset(defaultValues);
          //query.invalidateQueries({queryKey: ["auth"]});
        },
        onError: (error) => {
          console.log("Mutation failed", error);
          toast.error("Gửi không thành công");
        },
      });

  const notify = () => {
    return (
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
          >
            Send password reset email
          </Button>
        </Box>
    )
  };

  const handleVerify = () => {
    notify();
  }

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Verify Account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{mt: 1}}>
                <TextField
                    name="email"
                    fullWidth
                    {...register("email")}
                    type="text"
                    id="email"
                    label="Email Address*"
                />
                {errors.email ? (
                    <span style={{color: "red"}}>{errors.email.message}</span>
                ) : (<></>)}
                <Button
                    type="submit"
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={handleVerify}
                >
                  Send password reset email
                </Button>

              </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
  );
}