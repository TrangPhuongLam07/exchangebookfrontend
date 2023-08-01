import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "@tanstack/react-query";
import { useForm, useController, FormProvider } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Stack,
  Typography,
  FormGroup,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Cancel } from "@mui/icons-material";
import Input from "~/components/form/input";

const AddPostPage = () => {
  const PreviewImg = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const [selectedImgs, setSelectedImgs] = useState([]);

  const [openPreview, setOpenPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState({});

  const schema = yup
    .object({
      title: yup.string().required(),
      author: yup.string().required(),
      category: yup.string().required(),
      description: yup.string().required(),
      images: yup.array().of(yup.string()),
    })
    .required();

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

  const createPost = useMutation(async () => httpRequest.post("/posts"));

  console.log(errors);

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            name="title"
            control={control}
            placeholder="Enter title"
            type="text"
          />
        </FormGroup>
        <Button variant="contained" component="label">
          Select images
          <input type="file" multiple hidden onChange={handleSelectImgs} />
        </Button>
        <Box>
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
                <img
                  src={img.blobUrl}
                  alt=""
                  onClick={() => handlePreview(img)}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        <Button variant="contained">Create post</Button>
      </form>
      <PreviewImg open={openPreview} onClose={() => setOpenPreview(false)}>
        <Box
          maxWidth={600}
          maxHeight={1000}
          p={3}
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
    </>
  );
};

export default AddPostPage;