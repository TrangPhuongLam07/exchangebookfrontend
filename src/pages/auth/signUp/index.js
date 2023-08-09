import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormGroup, styled } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { authService } from "~/services";
import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUpPage() {
    const query = useQueryClient();
    const myStyles = {
        color: "red",
    };
    //validation form with yup
    const schema = yup.object().shape({
        firstName: yup.string().required("Please enter your name"),
        lastName: yup.string().required("Please enter your last Name"),
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
    //Giá trị ban đầu của sign up
    const defaultValues = {
        firstName: "",
        lastName: "",
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
        const registerRequest = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        };

        handleRegister.mutate(registerRequest);
    };

    //Gọi api register để sign up
    const handleRegister = useMutation(
        async (data) => authService.register(data),
        {
            onSuccess: (data) => {
                toast.success("Đăng ký thành công");
                reset(defaultValues);
                query.invalidateQueries({ queryKey: ["auth"] });
            },
            onError: (error) => {
                console.log("Mutation failed", error);
                toast.error("Đăng ký không thành công");
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
                        Sign up
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        {...register("firstName")}
                                        type="text"
                                        id="firstName"
                                        label="First Name*"
                                    />
                                </Grid>
                                {errors.firstName ? (
                                    <Grid item xs={12}>
                                        <span style={myStyles}>{errors.firstName.message}</span>
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        name="lastName"
                                        {...register("lastName")}
                                        type="text"
                                        id="lastName"
                                        label="Last Name*"
                                    />
                                </Grid>
                                {errors.lastName ? (
                                    <Grid item xs={12}>
                                        <span style={myStyles}>{errors.lastName.message}</span>
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        {...register("email")}
                                        type="text"
                                        id="email"
                                        label="Email Address*"
                                    />
                                </Grid>
                                {errors.email ? (
                                    <Grid item xs={12} sm={6}>
                                        <span style={myStyles}>{errors.email.message}</span>
                                    </Grid>
                                ) : (
                                    <></>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        name="password"
                                        {...register("password")}
                                        type="password"
                                        id="password"
                                        label="Password*"
                                    />
                                </Grid>
                                {errors.password ? (
                                    <Grid item xs={12}>
                                        <span style={myStyles}>{errors.password.message}</span>
                                    </Grid>
                                ) : (
                                    <Grid item xs={12}>
                    <span style={{ color: "gray" }}>
                      At least 6 letters (number, lowercase letter, uppercase
                      letter, special character){" "}
                    </span>
                                    </Grid>
                                )}
                                {/*  <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>*/}
                            </Grid>
                            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">

                                    {" "}
                                    <Grid item variant="body2">
                                        Already have an account?
                                        <Link to="/sign-in">Sign in</Link>
                                    </Grid>{" "}

                            </Grid>
                        </Box>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}