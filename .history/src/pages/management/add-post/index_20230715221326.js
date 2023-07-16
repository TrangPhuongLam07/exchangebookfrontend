import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, useController, FormProvider } from "react-hook-form";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import { HighlightOff } from "@mui/icons-material";

const AddPostPage = () => {
  const [selectedImgs, setSetlectedImgs] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    images: yup.array().of(yup.string()),
  });

  const defaultValues = {
    title: null,
    author: null,
    category: null,
    description: "",
    images: [],
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isValid, isSubmitSuccessful },
  } = useForm({
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
      setSetlectedImgs((prev) => [...prev, URL.createObjectURL(image)]);
    }
  };
  const createPost = useMutation(async () => httpRequest.post("/posts"));
  return (
    <form onSubmit={onSubmit}>
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
                overflow: "hidden",
                borderRadius: 2,
                border: 1,
                cursor: "pointer",
              }}
            >
              <IconButton>
                <HighlightOff />
              </IconButton>
              <img src={img} alt="" />
            </Box>
          ))}
        </Stack>
      </Box>
    </form>
  );
};

export default AddPostPage;
