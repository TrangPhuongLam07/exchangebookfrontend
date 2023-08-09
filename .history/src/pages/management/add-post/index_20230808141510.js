import toast from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { categoryService, postService } from "~/services";

import {
  Typography,
  styled,
  Modal,
  Button,
  Box,
  TextField,
  useTheme,
  Input,
} from "@mui/material";
import color from "~/config/color";

const AddPostPage = () => {
  const query = useQueryClient();
  const theme = useTheme();
  const navigate = useNavigate();
  const { data: categories } = useQuery(["categories"], async () =>
    categoryService.findAll()
  );
  const [selectedImgs, setSelectedImgs] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState({});
  const schema = yup.object().shape({
    title: yup.string().required("Không bỏ trống trường này"),
    author: yup.string().required("Không bỏ trống trường này"),
    category: yup.string().required(),
    description: yup.string().required("Không bỏ trống trường này"),
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
    register,
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
    const files = e.target.files;
    const base64Strings = [];

    for (const file of files) {
      reader.onload = (event) => {
        const reader = new FileReader();
        const base64Data = event.target.result;
        const base64String = base64Data.replace(
          /^data:image\/jpeg;base64,/,
          ""
        );
        base64Strings.push(base64String);
      };
      setSelectedImgs((prev) => [...prev, reader.readAsDataURL(file)]);
    }
  };
  console.log(selectedImgs);
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
  console.log(selectedImgs);
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
            sx={{
              backgroundColor: color.input.bg,
            }}
          />
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 3, mb: 2, backgroundColor: theme.palette.primary }}
          >
            <input
              type="file"
              multiple
              hidden
              onInput={handleSelectImgs}
              {...register("images")}
            />
            * Chọn ảnh cho tin đăng
          </Button>
          <TextField
            margin="normal"
            required
            fullWidth
            name="author"
            label="Auhthor name"
            id="author"
            autoComplete="author"
            {...register("author")}
            error={!!errors?.author}
            helperText={errors?.author?.message}
            sx={{
              backgroundColor: color.input.bg,
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
            autoComplete="description"
            {...register("description")}
            error={!!errors?.description}
            helperText={errors?.description?.message}
            sx={{
              backgroundColor: color.input.bg,
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: theme.palette.primary }}
          >
            Tạo bài viết
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddPostPage;
