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
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isValid, isSubmitSuccessful },
  } = useForm({
    initValues: {
      title,
      author,
      category,
      description,
      images: [],
    },
  });

  const onSubmit = (formData) => {
    handleSubmit(formData);
  };

  return <form onSubmit={onSubmit}></form>;
};

export default AddPostPage;
