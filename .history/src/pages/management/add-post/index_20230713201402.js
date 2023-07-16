import * as yup from "yup";
import { useForm } from "react-hook-form";

const AddPostPage = () => {
  const { register, handleSubmit } = useForm();
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
