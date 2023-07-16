import Input from "~/components/form/input";
import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm, useController, FormProvider, Form } from "react-hook-form";
import { Cancel } from "@mui/icons-material";
import {
  Typography,
  styled,
  Stack,
  Modal,
  IconButton,
  CircularProgress,
  Button,
  Box,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddPostPage = () => {
  const PreviewImg = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  });

  const [selectedImgs, setSelectedImgs] = useState([]);

  const [openPreview, setOpenPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState({});
  const [category, setCategory] = useState("");

  const schema = yup.object().shape({
    title: yup.string().required("This field is required"),
    author: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    images: yup.array().of(yup.string()),
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
    formState: { errors, isLoading, isValid, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });

  const onSubmit = (formData) => {
    handleSubmit(formData);
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
  const handleSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  const createPost = useMutation(async () => httpRequest.post("/posts"));
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];
  return (
    <Box width={650} marginX="auto">
      <form onSubmit={onSubmit}>
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
          {/* <FormGroup sx={{ marginBottom: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select label="Select category">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormGroup> */}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
              // labelId="demo-select-small-label"
              // id="demo-select-small"
              value={category}
              label="Category"
              onChange={handleSelectCategory}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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
                    onClick={() => handleRemoveImg(img)}
                  >
                    <Cancel />
                  </IconButton>
                  <img src={img.blobUrl} alt="" />
                </Box>
              ))}
            </Stack>
          </FormGroup>
          <Button variant="contained">Create post</Button>
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
