import httpRequest from "~/utils/httpRequest";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, useController, FormProvider } from "react-hook-form";
import { Button, CircularProgress } from "@mui/material";

const AddPostPage = () => {
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
  const createPost = useMutation(async () => httpRequest.post("/posts"));

  return (
    <form onSubmit={onSubmit}>
      {/* <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>
            {file.name} - {file.size} bytes
          </div>
        ))}
      </div> */}
      <Button variant="contained" component="label">
        Select images
        <input
          type="file"
          multiple
          hidden
          onInput={(e) => console.log(e.target)}
        />
      </Button>
      {/* {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>} */}
    </form>
  );
};

export default AddPostPage;
