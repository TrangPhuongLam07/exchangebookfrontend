import * as yup from "yup";
import { useForm, useController } from "react-hook-form";
import useStore from "~/store";

const AddPostPage = () => {
  const test = useStore((state) => state.test);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
    watch,
  } = useForm();
  const schema = yup.object().shape({
    title: yup.string().required().minLength(3),
    author: yup.string().required().minLength(3),
    genre: yup.string().required().minLength(3),
    price: yup.number().required().min(0),
    images: yup.array().of(yup.string()),
  });
  const onSubmit = (formData) => {
    handleSubmit(formData);
  };

  return <div>AddPostPage</div>;
};

export default AddPostPage;
