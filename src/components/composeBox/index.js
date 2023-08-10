import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useComposeState} from "~/services/ComposeStateService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useShareState} from "~/services/SharedStateService";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {authService, userService} from "~/services";

const ComposeBox = (props) => {
    const {composeState, setComposeStateEvent} = useShareState();
    //validation form with yup
    const schema = yup.object().shape({
        title: yup.string().required("Please enter title"),
        content: yup.string().required("Please enter your messages"),
    });

    //Giá trị ban đầu của sign up
    const defaultValues = {
        title: "",
        content: "",
    };
    const myStyles = {
        color: "red",
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
    //Xử lý exchange book request
    const onSubmit = async (data) => {
        console.log(data);
        const emailMessageRequest = {
            title: data.title,
            content: data.content,
            idPost: props.idPost,
        };

        handleExchangeBook.mutate(emailMessageRequest);
    };
   /* const emailMessageRequest = {
        title: "data.title",
        content: "data.content",
        idPost: "props.idPost",
    };
    userService.exchangeBook(emailMessageRequest).then((data) => {
        console.log(data)
    });*/

    //Gọi api register để sign up
    const handleExchangeBook = useMutation(async (data) => userService.exchangeBook(data), {
        onSuccess: (data) => {
            toast.success("Gửi thành công, Vui lòng chờ Admin duyệt bài");
            reset(defaultValues);
            userService.getProfile().then((data) => {
            });
        },
        onError: (error) => {
            console.log("Mutation failed", error);
            toast.error("Gửi không thành công");
        },
    });
    const handleClose = () => {
        setComposeStateEvent(false);
        console.log(composeState + " idPos: " + props.idPost);
         const emailMessageRequest = {
                title: "data.title",
                content: "data.content",
                idPost: 1,
            };
            userService.exchangeBook(emailMessageRequest).then((data) => {
               // setCheckPointEvent(data);
            });
       /*const sendmail = {
            email: "phuongtrang112200@gmail.com",
        };
        authService.verifyEmail(sendmail)*/
    };


    return (
        <div>

                <Dialog
                    open={composeState}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id="alert-dialog-title">
                        {"Enter your message to owner of this book!!!"}
                    </DialogTitle>

                    <DialogContent>
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": {m: 1, width: "30ch"},
                                width: 100,
                                marginLeft: 5,
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className={"compose-box"}>
                                {/*<TextField
                                    id="outlined-multiline-flexible"
                                    label="Title"
                                    multiline
                                    maxRows={4}
                                />*/}

                                {/* <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    // defaultValue=""
                                />*/}
                                <div>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Title"
                                        multiline
                                        maxRows={4}
                                        margin="normal"
                                        name="title"
                                        type="text"
                                        {...register("title")}
                                    />
                                </div>
                                <div>
                                    {errors.title ? (
                                        <span style={myStyles}>{errors.title.message}</span>
                                    ) : (
                                        <span style={{color: "gray"}}></span>
                                    )}
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name="content"
                                        type="text"
                                        {...register("content")}
                                    />
                                </div>
                                <div>
                                    {errors.content ? (
                                        <span style={myStyles}>{errors.content.message}</span>
                                    ) : (
                                        <span style={{color: "gray"}}></span>
                                    )}
                                </div>
                            </div>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" variant="contained">Send</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                    </form>
                </Dialog>


        </div>
    );
};
export default ComposeBox;
