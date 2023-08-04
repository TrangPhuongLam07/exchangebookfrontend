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
    <Box width={650} marginX="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" textAlign="center" fontWeight="700">
          Add post
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
              <input type="file" multiple hidden onChange={handleSelectImgs} />
            </Button>
          </FormGroup>
          <FormGroup sx={{ marginBottom: 2 }}>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {selectedImgs.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "50px",
                    height: "50px",
                    overflow: "hidden",
                    borderRadius: 2,
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
                  <img src={img.blobUrl} alt="" />
                </Box>
              ))}
            </Stack>
          </FormGroup>
          <Button variant="contained" type="submit">
            Create post
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
          <img src={previewImg.blobUrl} alt="" />
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

export default AddPostPage;
