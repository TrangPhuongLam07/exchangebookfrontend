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
    // data.category = +data.category;
    // data.base64Images = [...selectedImgs];
    const data = {
      title: "123",
      author: "123123",
      category: 1,
      description: "12312312",
      base64Images: [
        "data:image/jpeg;base64,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",
      ],
    };

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
              {...register("category")}
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
