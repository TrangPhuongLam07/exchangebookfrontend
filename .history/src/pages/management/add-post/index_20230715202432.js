import { useForm, useController, FormProvider } from "react-hook-form";
import * as yup from "yup";
const AddPostPage = () => {
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
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitSuccessful, isValid },
  //   watch,
  // } = useForm();
  // const schema = yup.object().shape({
  //   title: yup.string().required().minLength(3),
  //   author: yup.string().required().minLength(3),
  //   genre: yup.string().required().minLength(3),
  //   price: yup.number().required().min(0),
  //   images: yup.array().of(yup.string()),
  // });
  // const onSubmit = (formData) => {
  //   handleSubmit(formData);
  // };

  return <form onSubmit={handle}></form>;
};

export default AddPostPage;
