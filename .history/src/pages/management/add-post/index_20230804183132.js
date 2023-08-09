import toast from "react-hot-toast";
import Input from "~/components/form/input";
import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MySelect } from "~/components/form/select";
import { categoryService, postService } from "~/services";
import { Cancel } from "@mui/icons-material";

import {
  Typography,
  styled,
  Stack,
  Modal,
  IconButton,
  Button,
  Box,
  FormGroup,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const AddPostPage = () => {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { data: categories } = useQuery(["categories"], async () =>
    categoryService.findAll()
  );
  const [selectedImgs, setSelectedImgs] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState({});
  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    images: yup.array().of(yup.object()),
  });

  const defaultValues = {
    title: "",
    author: "",
    category: "",
    description: "",
    images: [],
  };
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });

  const onSubmit = async (data) => {
    data.category = categories.find(
      (category) => category.id === watch("category")
    );
    const postRequest = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: Number.parseInt(data.category.id),
    };

    const formData = new FormData();
    formData.append(
      "postRequest",
      new Blob([JSON.stringify(postRequest)], { type: "application/json" })
    );
    for (const image of selectedImgs) {
      formData.append("images", image.file); // Append the image file directly
    }

    createPost.mutate(formData);
  };
  const handleSelectImgs = (e) => {
    const images = e.target.files;
    const reader = new FileReader();
    for (const image of images) {
      reader.readAsArrayBuffer(image);
      reader.onload = () => {
        setSelectedImgs((prev) => [
          ...prev,
          {
            name: image.name,
            file: image,
            blobUrl: URL.createObjectURL(image),
            base64: reader.result,
          },
        ]);
      };
    }
  };
  const handlePreview = (selectedImg) => {
    setPreviewImg(selectedImg);
    setOpenPreview(true);
  };
  const handleRemoveImg = (img) => {
    const newSelectedImgs = selectedImgs.filter(
      (selectedImg) => selectedImg.name !== img.name
    );
    setSelectedImgs(newSelectedImgs);
  };
  const createPost = useMutation(async (data) => postService.create(data), {
    onSuccess: (data) => {
      toast.success("Tạo bài mới thành công, chúng tôi sẽ sớm duyệt bài!");
      reset(defaultValues);
      setSelectedImgs([]);
      setPreviewImg({});
      query.invalidateQueries({ queryKey: ["posts"] });
      navigate("/management", { replace: true });
    },
    onError: (error) => {
      console.log("Mutation failed", error);
    },
  });
  const PreviewImg = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
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
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar> */}
        <Typography component="h1" variant="h5">
          Add Post
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
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            {...register("title")}
            error={!!errors?.title}
            helperText={errors?.title?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="author"
            label="author"
            type="author"
            id="author"
            autoComplete="author"
            {...register("author")}
            error={!!errors?.author}
            helperText={errors?.author?.message}
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

export default AddPostPage;
