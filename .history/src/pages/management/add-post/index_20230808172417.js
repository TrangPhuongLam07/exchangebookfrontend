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
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  ImageList,
  ImageListItem,
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
    category: yup.string().required("Không bỏ trống trường này"),
    description: yup.string().required("Không bỏ trống trường này"),
    // base64Images: yup.array().of(yup.object()),
  });

  const defaultValues = {
    title: "",
    author: "",
    category: "none",
    description: "",
    base64Images: [],
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
    data.base64Images = [...selectedImgs];
    createPost.mutate(data);
  };
  const handleSelectImgs = (e) => {
    const files = e.target.files;
    const base64Strings = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const base64Data = e.target.result;
        base64Strings.push(base64Data);
      };
    }
    setSelectedImgs(base64Strings);
  };
  // const handlePreview = (selectedImg) => {
  //   setPreviewImg(selectedImg);
  //   setOpenPreview(true);
  // };
  // const handleRemoveImg = (img) => {
  //   const newSelectedImgs = selectedImgs.filter(
  //     (selectedImg) => selectedImg.name !== img.name
  //   );
  //   setSelectedImgs(newSelectedImgs);
  // };
  console.log(watch("category"));
  const createPost = useMutation(async (data) => postService.create(data), {
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: ["posts"] });
      navigate("/management", { replace: true });
      toast.success("Tạo bài mới thành công, chúng tôi sẽ sớm duyệt bài!");
      reset(defaultValues);
      setSelectedImgs([]);
      setPreviewImg({});
    },
    onError: (error) => {
      // console.log("Mutation failed", error);
      toast.error(error.message);
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
            sx={{
              backgroundColor: color.input.bg,
            }}
          />
          <FormControl
            sx={{ m: 1, minWidth: 120, backgroundColor: color.input.bg }}
            error={!!errors?.category}
          >
            {/* <InputLabel
              sx={{
                color: color.input.color,
              }}
              id="category-label"
            >
              Category
            </InputLabel> */}
            {/* <Select
              labelId="category-label"
              id="category"
              label="Category"
              value={watch("category")}
              {...register("category")}
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id + ""}>
                  {category.name}
                </MenuItem>
              ))}
            </Select> */}
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Category"
              value={watch("category")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id + ""}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors?.category?.message}</FormHelperText>
          </FormControl>
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
              {...register("base64Images")}
            />
            * Chọn ảnh cho tin đăng
          </Button>
          <ImageList variant="quilted" cols={4} rowHeight={121}>
            {selectedImgs.map((item, index) => (
              <img key={index} src={`${item}`} srcSet={`${item}`} />
            ))}
          </ImageList>
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
