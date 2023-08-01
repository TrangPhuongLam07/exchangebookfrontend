import Input from "~/components/form/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { POST_STATUS } from "~/utils/constant";
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
} from "@mui/material";
import { toast } from "react-hot-toast";

const UpdatePost = () => {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImgs, setSelectedImgs] = useState([]);
  const [previewImg, setPreviewImg] = useState({});
  const [openPreview, setOpenPreview] = useState(false);
  const { data: categories } = useQuery(["categories"], () =>
    categoryService.findAll()
  );
  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.number().required(),
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
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });

  // fetch post data
  const {
    data: post,
    isLoading,
    isSuccess,
  } = useQuery(["post", id], async () => postService.getOne(id), {
    onSuccess: (post) => {
      reset({
        title: post?.title,
        author: post?.author,
        category: post?.category.id,
        description: post?.description,
        images: post?.images.map((image) => ({
          name: image.name,
          data: image.data,
        })),
      });
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append(
      "postRequest",
      new Blob(
        [
          JSON.stringify({
            title: data.title,
            author: data.author,
            description: data.description,
            category: data.category,
            status: POST_STATUS.UPDATE_PENDING,
          }),
        ],
        { type: "application/json" }
      )
    );
    watch("images").map((img) => {
      const reader = new FileReader();
      console.log(img);
      // reader.readAsDataURL(img.data);
      // reader.onload = () => {
      //   const file = reader.result;
      //   formData.append("images", file);
      // };
    });
    // updatePostMutation.mutate(formData);
  };
  const updatePostMutation = useMutation({
    mutationFn: (data) => postService.updateOne(id, data),
    onSuccess: () => {
      toast.success("Gui yeu thanh cong");
      query.invalidateQueries({ queryKey: ["posts"] });
      navigate("/management", { replace: true });
    },
  });

  const handleSelectImgs = (e) => {
    const formData = new FormData();
    const images = e.target.files;
    for (const image of images) {
      formData.append("images", image);
      setValue("images", [
        ...watch("images"),
        { data: image.data, name: image.name },
      ]);
    }
  };
  const handlePreview = (selectedImg) => {
    setPreviewImg(selectedImg);
    setOpenPreview(true);
  };
  const handleRemoveImg = (img) => {
    const newSelectedImgs = watch("images").filter(
      (selectedImg) => selectedImg.name !== img.name
    );
    setValue("images", newSelectedImgs);
  };

  const PreviewImg = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  });

  if (isLoading) return <>Loading</>;
  if (isSuccess)
    return (
      <Box width={650} marginX="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" textAlign="center" fontWeight="700">
            Update post
          </Typography>
          <Box padding={2}>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Input label="Title" name="title" control={control} type="text" />
            </FormGroup>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Input
                label="Author name"
                name="author"
                control={control}
                type="text"
              />
            </FormGroup>
            <FormControl sx={{ mb: 2, minWidth: 120 }} size="small">
              <InputLabel
                sx={{ bgcolor: "white", px: 1 }}
                error={errors?.category}
              >
                Category
              </InputLabel>
              <MySelect name="category" control={control}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories?.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </MySelect>
            </FormControl>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Input
                label="Description"
                name="description"
                control={control}
                type="text"
              />
            </FormGroup>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Button variant="contained" component="label">
                Select images
                <input
                  type="file"
                  multiple
                  hidden
                  onChange={handleSelectImgs}
                />
              </Button>
            </FormGroup>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {watch("images")?.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: 1,
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={() => handlePreview(img)}
                  >
                    <IconButton
                      sx={{
                        position: "absolute",
                        right: "-40%",
                        top: "-35%",
                        zIndex: 10,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImg(img);
                      }}
                    >
                      <Cancel />
                    </IconButton>
                    <img src={"data:image/*;base64," + img.data} alt="" />
                  </Box>
                ))}
              </Stack>
            </FormGroup>
            <Button variant="contained" type="submit">
              Update post
            </Button>
          </Box>
        </form>
        <PreviewImg open={openPreview} onClose={() => setOpenPreview(false)}>
          <Box
            maxWidth={600}
            maxHeight={1000}
            p={3}
            pb={1.5}
            borderRadius={4}
            bgcolor="white"
            position="relative"
          >
            <img src={"data:image/*;base64," + previewImg.data} alt="" />
            <Typography variant="h6">{previewImg.name}</Typography>
            <IconButton
              sx={{
                position: "absolute",
                right: "-20px",
                top: "-20px",
              }}
              onClick={() => setOpenPreview(false)}
            >
              <Cancel sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>
        </PreviewImg>
      </Box>
    );
};

export default UpdatePost;
