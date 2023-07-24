import Input from "~/components/form/input";
import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm, useController, FormProvider, Form } from "react-hook-form";
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
import { MySelect } from "~/components/form/select";
import { categoryService } from "~/services";
import { useParams } from "react-router-dom";
const options = [
  { id: 1, value: "Option 1", label: "Option 1" },
  { id: 2, value: "Option 2", label: "Option 2" },
  { id: 3, value: "Option 3", label: "Option 3" },
];
const UpdatePost = () => {
  const PreviewImg = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  });

  const { id } = useParams();
  const [selectedImgs, setSelectedImgs] = useState([]);

  const [openPreview, setOpenPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState({});

  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    images: yup.array().of(yup.string()),
  });
  // fetch post data
  const fetchPost = useQuery(["post", id]);
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
    formState: { errors, isLoading, isValid, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });

  const onSubmit = (formData) => {
    formData.category = options.find(
      (option) => option.value === watch("category")
    );
    createPost.mutate(formData);
  };
  const handleSelectImgs = (e) => {
    const formData = new FormData();
    const images = e.target.files;
    for (const image of images) {
      formData.append("images", image);
      setSelectedImgs((prev) => [
        ...prev,
        {
          name: image.name,
          blobUrl: URL.createObjectURL(image),
        },
      ]);
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
  const createPost = useMutation(
    async (formData) =>
      httpRequest.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log("Mutation failed", error);
      },
    }
  );

  // const fetchCategories = useQuery(["categories"], async () =>
  //   categoryService.findAll()
  // );

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
              {options.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.label}
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

export default UpdatePost;
