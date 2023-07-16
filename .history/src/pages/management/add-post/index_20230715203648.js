import { Button, CircularProgress } from "@mui/material";
import { useForm, useController, FormProvider } from "react-hook-form";
import * as yup from "yup";
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

  return (
    <form onSubmit={onSubmit}>
      <input type="file" multiple onChange={handleFileSelect} />

      <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>
            {file.name} - {file.size} bytes
          </div>
        ))}
      </div>

      <Button variant="contained" component="label">
        Select Files
        <input type="file" multiple style={{ display: "none" }} />
      </Button>

      <Button variant="contained" type="submit">
        Upload Files
      </Button>

      {/* {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>} */}
    </form>
  );
};

export default AddPostPage;
